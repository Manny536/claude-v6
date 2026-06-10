# WP5b — Spectral Shift and Relative Determinant Roadmap

**Status:** OPEN, first-priority corridor after V6.3

## Question

Does relative determinant data escape Theorem F heat-trace rigidity, or does it inherit the same obstruction?

## Setup

Let

```text
D = L²_Φ
A = L²_{Φ,K}^{reg} = D + γ_K K_σ^{reg}
```

with `σ > 1/2`, so `K_σ^{reg}` is Hilbert-Schmidt.

The plain heat trace is rigid:

```text
Tr(e^{-tA}) - Tr(e^{-tD}) = O(t^{3/4}).
```

Therefore WP5b must use modified functionals:

```text
spectral shift ξ(λ; A,D)
relative zeta functions
relative determinants
determinant ratios
```

## First proof obligation

Construct the spectral shift functional for the pair `(A,D)` in the Hilbert-Schmidt regime.

Candidate route:

```text
R_A(z) = (A-z)^{-1}
R_D(z) = (D-z)^{-1}
```

Study whether a trace-class resolvent difference or regularized trace-class expression exists:

```text
R_A(z) - R_D(z)
= -R_A(z) γ_K K_σ^{reg} R_D(z).
```

Since `K_σ^{reg}` is Hilbert-Schmidt and resolvents improve diagonal decay, the relative determinant may be definable even when the perturbation itself is not trace-class.

## Determinant object

Candidate:

```text
D_rel(z)
= det_2(I + γ_K K_σ^{reg}(D-z)^{-1})
```

where `det_2` is the Hilbert-Schmidt regularized determinant.

Log derivative target:

```text
d/dz log D_rel(z)
```

should be compared against the spectral-shift transform.

## Gate

### WP5b-live

WP5b remains live if determinant-ratio data contains structure not constrained by Theorem F and not reducible to the two-term Φ heat trace.

### WP5-OBS-2

WP5b closes if the relative determinant is coupling-rigid in the same way as the heat trace, or if its asymptotics remain incompatible with the Ξ-side explicit formula.

## Expected pressure point

The determinant must somehow see a prime-side structure:

```text
Σ_n Λ(n)n^{-1/2} f(log n)
```

or an equivalent arithmetic oscillation.

If the determinant data only sees polynomial lattice corrections from `n⁴`, it does not reach Ξ.

## Recommended next calculation

1. Define `B_z = γ_K K_σ^{reg}(D-z)^{-1}`.
2. Prove `B_z` is Hilbert-Schmidt for `z` off spectrum.
3. Define `det_2(I+B_z)`.
4. Compute the first nonzero expansion term:

```text
log det_2(I+B_z)
= -1/2 Tr(B_z²) + 1/3 Tr(B_z³) - ...
```

because `det_2` removes the linear trace.

5. Test whether `Tr(B_z²)` is density-only or contains arithmetic structure.

## Claim discipline

WP5b is OPEN. No determinant identity with Ξ is claimed.
