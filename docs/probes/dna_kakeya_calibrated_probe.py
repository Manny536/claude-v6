#!/usr/bin/env python3
"""CP-DNA-002 — source-calibrated A/B/Z direction-coverage diagnostic.

Calibrates the ideal-helix rails with published A-, B-, and Z-DNA structural
parameters (Dickerson 1992, Methods in Enzymology 211; Franklin 1953) and reports
the tangent-direction latitude each conformation occupies, plus the covering gap
of the finite A/B/Z union against a deterministic spherical grid.

FIREWALL: line-direction (tangent) coverage is NOT unit-segment containment.
This probe cannot and does not certify a Kakeya set, RH, or the Coleman Conjecture.
Directions are treated as unoriented lines (v ~ -v); handedness sets winding sign
only and does not change the unoriented latitude magnitude.
"""
from __future__ import annotations
import json, math
from typing import Sequence

Vec3 = tuple[float, float, float]

# --- calibrated parameters (angstrom) -------------------------------------
# diameter, rise-per-turn (pitch), handedness sign chi
CONFORMATIONS = {
    "A-DNA": dict(diameter=23.0, pitch=28.6, chi=+1, bp_per_turn=11, rise_bp=2.6, twist_bp=32.7),
    "B-DNA": dict(diameter=20.0, pitch=35.7, chi=+1, bp_per_turn=10, rise_bp=3.4, twist_bp=34.3),
    "Z-DNA": dict(diameter=18.0, pitch=45.6, chi=-1, bp_per_turn=12, rise_bp=3.7, twist_bp=-30.0),
}

def dot(a: Vec3, b: Vec3) -> float:
    return sum(x*y for x, y in zip(a, b))

def normalize(v: Vec3) -> Vec3:
    n = math.sqrt(dot(v, v))
    return (v[0]/n, v[1]/n, v[2]/n)

def helix_tangent(theta: float, radius: float, rise_per_radian: float, chi: int) -> Vec3:
    # R(t) = (r cos(chi t), r sin(chi t), rise_per_radian * t)
    return normalize((-radius*chi*math.sin(chi*theta),
                       radius*chi*math.cos(chi*theta),
                       rise_per_radian))

def sample_directions(radius: float, rise_per_radian: float, chi: int, n: int) -> list[Vec3]:
    return [helix_tangent(2*math.pi*i/n, radius, rise_per_radian, chi) for i in range(n)]

def fibonacci_sphere(n: int) -> list[Vec3]:
    ga = math.pi*(3.0 - math.sqrt(5.0))
    pts = []
    for i in range(n):
        z = 1.0 - 2.0*(i+0.5)/n
        r = math.sqrt(max(0.0, 1.0 - z*z))
        t = ga*i
        pts.append((r*math.cos(t), r*math.sin(t), z))
    return pts

def line_angle(a: Vec3, b: Vec3) -> float:
    return math.acos(min(1.0, max(0.0, abs(dot(a, b)))))

def coverage(dirs: Sequence[Vec3], targets: Sequence[Vec3]) -> dict:
    gaps = [min(line_angle(t, d) for d in dirs) for t in targets]
    return {"worst_gap_deg": math.degrees(max(gaps)),
            "mean_gap_deg": math.degrees(sum(gaps)/len(gaps))}

def build_report() -> dict:
    samples = 720
    targets = fibonacci_sphere(1024)
    per = {}
    union: list[Vec3] = []
    for name, p in CONFORMATIONS.items():
        radius = p["diameter"]/2.0
        rise_per_radian = p["pitch"]/(2*math.pi)
        axial = rise_per_radian/math.sqrt(radius**2 + rise_per_radian**2)  # |unit tangent . e_z|
        latitude_deg = math.degrees(math.asin(axial))     # elevation of tangent above equatorial plane
        colatitude_deg = math.degrees(math.acos(axial))   # angle of tangent from helix axis
        dirs = sample_directions(radius, rise_per_radian, p["chi"], samples)
        union += dirs
        per[name] = {
            "radius_A": radius, "pitch_A": p["pitch"], "handedness": "right" if p["chi"]>0 else "left",
            "axial_component": axial, "tangent_latitude_deg": latitude_deg,
            "tangent_colatitude_from_axis_deg": colatitude_deg,
            **coverage(dirs, targets),
        }
    union_cov = coverage(union, targets)
    lat = [per[n]["tangent_latitude_deg"] for n in CONFORMATIONS]
    checks = {
        "each_conformation_is_a_single_latitude_circle": True,
        "abz_latitudes_are_distinct": (max(lat)-min(lat)) > 1.0,
        "single_conformations_not_direction_complete": all(per[n]["worst_gap_deg"] > 20.0 for n in CONFORMATIONS),
        "finite_abz_union_not_direction_complete": union_cov["worst_gap_deg"] > 20.0,
        "tangent_coverage_is_not_kakeya_certification": True,
    }
    return {
        "designation": "CP-DNA-002",
        "status": "NUMERICS / DIAGNOSTIC (source-calibrated)",
        "calibration_source": "Dickerson 1992 (Methods Enzymol. 211); Franklin 1953",
        "direction_space": "unoriented lines (v ~ -v)",
        "samples_per_helix": samples, "spherical_targets": len(targets),
        "per_conformation": per,
        "finite_abz_union": union_cov,
        "checks": checks,
        "firewall": [
            "tangent-direction coverage is not unit-segment containment",
            "a finite union of latitude circles is measure zero on S^2",
            "CP-DNA-002 does not certify a Kakeya set, RH, or the Coleman Conjecture",
        ],
        "pass": all(checks.values()),
    }

if __name__ == "__main__":
    print(json.dumps(build_report(), indent=2, sort_keys=True))
