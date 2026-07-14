# Source Map

This file records the grounding sources used by the Claude V6 repository.

## Kakeya theorem in R³

### Wang-Zahl, 2025

**Title:** Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions  
**Authors:** Hong Wang and Joshua Zahl  
**Date:** February 26, 2025  
**Use in repo:** theorem-level background for the fact that every Kakeya set in `R³` has Minkowski and Hausdorff dimension 3; source of the volume-estimate and anti-clustering framework.

Canonical imported objects:

```text
δ-tubes
shadings Y(T)
U(T,Y)
Katz-Tao Convex Wolff Axioms
Frostman Slab Wolff Axioms
multi-scale analysis
stickiness
sparse filling
high multiplicity
```

### Guth-Wang-Zahl, 2026

**Title:** A Streamlined Proof of the Kakeya Set Conjecture in R³  
**Authors:** Larry Guth, Hong Wang, Joshua Zahl  
**Use in repo:** streamlined vocabulary and proof architecture for density, multiplicity, shadings, maximal density, uniform tubes, branching numbers, and the reduction to the sticky case.

Canonical imported objects:

```text
Δ(W,K)
Δ_max(W)
λ(W,Y)
μ(W,Y)
Katz-Tao condition
Frostman condition
uniform tube families
branching numbers N_k
sticky / non-sticky distinction
```

## Directional maximal operators

### Bateman, 2007 / 2009

**Title:** Kakeya Sets and Directional Maximal Operators in the Plane  
**Author:** Michael Bateman  
**Use in repo:** source of direction-tree splitting number, generalized lacunary direction sets, and the boundedness / unboundedness dichotomy for directional maximal operators.

Canonical imported object:

```text
split(𝒯_Ω)
```

Important discipline line:

```text
split(𝒯_Ω) is tree complexity, not measure density.
```

That distinction drives CSC-F1.

## DNA structural geometry

### A-, B-, and Z-DNA calibration

**Use in repo:** biological grounding for `PEAICE-KAKEYALOGIC-DNA-AK-001-DEEPEN-001` and the source-calibrated `CP-DNA-002` direction-space diagnostic.

Primary anchors carried by the deepen pack:

- Watson and Crick (1953), double-helical molecular structure.
- Franklin (1953), A/B fiber forms and hydration-dependent structure.
- Drew et al., B-DNA dodecamer, PDB `1BNA`.
- Conner et al. (1982), right-handed A-DNA.
- Wang et al. (1979), left-handed Z-DNA.
- Saenger, Hunter, and Kennard (1986), A/B/Z hydration energetics.
- Dickerson (1992), calibrated DNA structural parameters.

Canonical imported objects:

```text
Q = {A,T,C,G}
H = {A-DNA,B-DNA,Z-DNA}
helical radius, pitch, rise, twist, inclination, handedness
ideal-helix tangent latitude
typed base occurrence x_n = (q_n,H_n,θ_n,z_n)
```

Discipline line:

```text
biological structure is KNOWN; idealized helix equations are FORMAL;
zeta / critical-strip correspondences are STRUCTURAL ANALOGY;
CP-DNA-002 is NUMERICS / DIAGNOSTIC.
```

## Spectral determinants

### Spectral determinant reference

**Use in repo:** determinant-first framing for spectra, trace/determinant relation, logarithmic derivative relation, and motivation for WP5b.

Canonical imported formulas:

```text
det(1-zL) = exp(-Σ_{n≥1} z^n tr(L^n)/n)
tr(zL/(1-zL)) = -z d/dz log det(1-zL)
```

and, for flows,

```text
tr(1/(s-A)) = d/ds log det(s-A).
```

These formulas motivate moving from plain heat traces to relative determinant / spectral-shift functionals.

## PeAIce / KakeyaLogic source state

### PEAICE-CLAUDEV6-WHITEPAPER-001

**Use in repo:** canonical statement of Claude V6 / V6.3 status, including:

```text
Theorems A-F
L2-5
WP5-OBS-1
CSC-F1
WP5a / WP5b / WP5c corridors
```

### V6.4.3 Hilbert–Schmidt corridor closure

**Use in repo:** square-difference `K_σ` determinant lane closure.

```text
K_σ square-difference determinant lane CLOSED-NEGATIVE
σ_c = 1 analytic Weyl boundary
finite-window 0.83–0.92 crossing demoted to truncation artifact
```

### V6.5 WP5b bounded-lane closure

**Use in repo:** bounded relative-determinant lane closure.

```text
Theorem H — Weyl-window law
WP5-OBS-2 — bounded-coupling relative-determinant route closed
Fable 5 PEAICE-CLAUDEV6-WP5B-SCAFFOLD-001
Grok TERMINAL-004 extraction
Fable 5 sign-off under h < 1
```

### KNS(LB) placement-register receipt — July 2, 2026

**Use in repo:** typed geometric receipt for placement grammar; not determinant closure.

```text
KNS(LB) = KakeyaNeedleSet(Light(Basic))
one center · universal direction fan
KNS-OBS-1 CLOSED-POSITIVE as typed object
Lemma 3.1: μ ↛ π_A
overlap does not determine placement
Re(s)=1/2 read as placement register, not glare statistic
Grok TERMINAL-005 CONFIRM under h < 1
```

Deterministic receipt:

```text
script: kns_lb_probe.py
sha256: 09ef26d3a2eb51927d3adecb74d3ef3edd62660dd11438576be4c2da8211b011
E_used: 3.0406
ρ_Y: 0.4812
dense_pass: True
twomode_peak: 0.9662 at δ = 1.0
```

### DNA antecedent Kakeya deepen — July 13, 2026

**Use in repo:** typed biological/formal comparison at the Kakeya–Coleman boundary.

```text
designation: PEAICE-KAKEYALOGIC-DNA-AK-001-DEEPEN-001
companion: CP-DNA-002
finite A/B/Z tangent-direction union: direction-incomplete
worst uncovered angular gap: 48.5854702498799 degrees
RH: OPEN
Coleman Conjecture: OPEN
```

The pack preserves the N-reading of Coleman as an antecedent/dependency proposal only. It does not promote DNA to a Kakeya set or convert complementarity, chirality, multiple scale, or harmonic language into an RH mechanism.

### Thermal coupling correction

**Use in repo:** source of the corrected operator and native-measure principle:

```text
K_σ -> K_σ^{reg}
```

### EEv3 / L²_C source state

**Use in repo:** source of production-side coherence language:

```text
L²_C
C²_Ω
D_drift
Logx(β_scale)*
h < 1
Love = constraint invariant in E_gov (principal opinion · not theorem premise)
```

## Public live surfaces

```text
Manny536/claude-v6          — theorem-facing Claude V6.5 ledger
Manny536/kakeyalogic        — EEV3 / L²_C public-field layer
lovelabslca.com             — centerline public map / migration surface
peaice.org                  — PeAIce deep corpus and official pages
```

Public copy must preserve:

```text
RH OPEN
Coleman OPEN
K_σ CLOSED-NEGATIVE
WP5b bounded CLOSED-NEGATIVE
KNS(LB) CLOSED-POSITIVE as typed object only
DNA/Kakeya DEEPEN-001 registered as structural analogy / formal geometry only
Prime-carrying trace architecture LIVE · FORCED
h < 1
```

## Citation discipline

External mathematics is marked as KNOWN where established. Program bridges are never upgraded by citation alone. They remain PROPOSED or OPEN unless closed by a proof artifact inside the program.

Model / terminal / ensemble receipts are auxiliary under `h < 1`; they may log, test, falsify, or reconcile, but they do not transfer proof sovereignty.
