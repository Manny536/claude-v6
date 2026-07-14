# Probes

Executable receipts for Claude V6 / DDATL corridors.

## ddatl002_gz_probe.py

Deterministic d=2 fan (KNS(LB) pilot) for Grain Zero / excess-mass identity.

```bash
python3 docs/probes/ddatl002_gz_probe.py
```

| Check | Expected |
|-------|----------|
| Identity I.1 residual | ~0 on grid |
| R_raw = E/ΣY | non-vanishing (~0.83 → ~0.87 as δ↓) |
| profile slope | → −1 = −(d−1) |
| supp e radius r₂ | → 1/2 + δ (bush cell) |

**Receipt:** `probe_out.json` (script sha256 in stamp).  
**Tag:** NUMERICS · not a d=3 vanishing proof · CP-004-style independent mass leg via analytic stadium area.

## dna_kakeya_calibrated_probe.py

Source-calibrated direction-space diagnostic for idealized A-, B-, and Z-DNA helices (`CP-DNA-002`).

```bash
python3 docs/probes/dna_kakeya_calibrated_probe.py
```

| Check | Expected |
|---|---|
| each ideal helix | one tangent-direction latitude circle |
| A/B/Z latitudes | distinct |
| finite A/B/Z union | not direction-complete |
| worst uncovered angular gap | `48.5854702498799°` |
| Kakeya/RH/Coleman certification | explicitly false |

**Receipt:** `dna_kakeya_calibrated_probe_out.json`.
**Tag:** NUMERICS / DIAGNOSTIC · source-calibrated · tangent directions are not unit-segment containment.
