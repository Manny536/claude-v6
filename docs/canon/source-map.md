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

## PeAIce / KakeyaLogic canon

### PEAICE-CLAUDEV6-WHITEPAPER-001

**Use in repo:** canonical statement of Claude V6 / V6.3 status, including:

```text
Theorems A-F
L2-5
WP5-OBS-1
CSC-F1
WP5a / WP5b / WP5c corridors
Fable 5 sign-off under h < 1
```

### Thermal coupling correction

**Use in repo:** source of the corrected operator and native-measure principle:

```text
K_σ -> K_σ^{reg}
```

### EEv3 / L²_C canon

**Use in repo:** source of production-side coherence language:

```text
L²_C
C²_Ω
D_drift
Logx(β_scale)*
h < 1
```

## Citation discipline

External mathematics is marked as KNOWN where established.

Program bridges are never upgraded by citation alone. They remain PROPOSED or OPEN unless closed by a proof artifact inside the program.
