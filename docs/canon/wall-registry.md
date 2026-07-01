# Wall Registry

The wall registry records closed routes, open load-bearing targets, and falsification events.

## GAP-001

**Status:** OPEN, irreducible from V5

The `{n²}` arithmetic of the Φ-kernel is not reached by exterior energy, symmetry, density, or measure arguments alone.

Five exterior routes were surveyed and closed:

1. Fourier / L² density.
2. Hadamard / Ξ form alone.
3. Functional-equation symmetry alone.
4. Spectral analogy alone.
5. Kakeya energy / measure alone.

The gap forces direct engagement with analytic-continuation arithmetic.

## L2-5

**Status:** FORMAL, route closed

Eigenvalue-by-eigenvalue identification fails by counting:

```text
N_L(T) ~ T^{1/4}
```

versus

```text
N_ξ(T) ~ (T/2π)log(T/2π).
```

No bounded coupling closes this rate mismatch.

## WP5-OBS-1

**Status:** FORMAL, route closed

The bounded-coupling heat-trace route is closed.

Theorem F gives coupling rigidity:

```text
Tr(e^{-t(D+γK)}) - Tr(e^{-tD}) = O(t^{3/4})
```

for bounded self-adjoint `K`.

Thus bounded coupling cannot create the Ξ-side singularity:

```text
t^{-1/2}log(1/t)
```

or the prime-oscillation sector.

## CSC-F1

**Status:** FALSIFIED-IN-REALIZATION

The trace-moment κ family

```text
κ₂, κ_∞, κ_dens
```

detects log-measure / density statistics of the direction set, not Bateman splitting number.

Canonical consequence:

```text
Coherence-Splitting Conjecture
= PROPOSED, reformulation required
```

Clause (i) fails in the natural trace-moment realization.

## BK-HP-CC / L2-SI

**Status:** OPEN for a prime-carrying operator · CLOSED-NEGATIVE for the `K_σ` realization (V6.4.3)

Determinant identity target:

```text
det_ζ(L²_{Φ,K}^{reg} - (z² + 1/4)) = C · Ξ(z)
```

The square-difference (`K_σ`) realization of this target is closed — see `#hs-corridor`.
The target is retained only for a prime-carrying length/weight operator.

Bridge obligations include:

- domain compatibility,
- symmetry sector compatibility,
- determinant compatibility,
- Riemann-von Mangoldt counting,
- explicit-formula recovery,
- off-critical leakage suppression.

## HS-CORRIDOR (V6.4.3)

**Status:** FORMAL / CLOSED-NEGATIVE — determinant lane closed

The V6.4.3 singular-value reduction upgrades L2-5 from "eigenvalue-by-eigenvalue closed"
to "determinant lane closed" for the square-difference kernel.

Singular-value law (Weyl symbol `x^{-σ}|ξ|^{σ-1}`; rigorous route Birman–Solomyak):

```text
s_n(K_σ) ~ c_σ n^{-α(σ)},   α(σ) = σ (leading order),   ρ(K_σ) = 1/σ
```

Three-gate pincer on `det₂(I - z K_σ) = C·Ξ`:

```text
σ < σ* :  α<1 ⇒ ρ>1 ⇒ det₂ order > 1 ≠ order-1 Ξ         CLOSED (order)
σ > σ* :  α>1 ⇒ K_σ ∈ S₁ ⇒ Fredholm det genus 0 ≠ Ξ      CLOSED (genus)
σ = σ* :  λ_n ~ n^{-1} ⇒ det-zeros ~ R (linear) ≠ T logT  CLOSED (density)
```

Full-operator closure (this is L2-5 sharpened): `γ_K K_σ` is relatively compact w.r.t.
`D₁²`, so Weyl-class invariance preserves `N(Λ) ~ Λ^{1/4}` and never reaches
`√Λ log Λ`. Hence the squared-determinant target is CLOSED-NEGATIVE for the `K_σ`
realization. The finite crossing `σ*_N ≈ 0.83–0.92` is a truncation artifact; `σ_c = 1`
is the analytic boundary. Gap relocates to the prime-carrying operator.

## LINDELÖF CEILING (background wall)

**Status:** KNOWN (background) — motivates the operator route

The harmonic-analytic dependency tower (Kakeya/restriction → ℓ²-decoupling →
Dirichlet-polynomial large values → zero-density) outputs only **bounds**. The strongest
conjectural output of this lineage is Lindelöf-type:

```text
RH ⇒ LH (Lindelöf) ⇒ Density Hypothesis     (all reverse implications OPEN)
LH is not known to imply RH; LH is strictly weaker than RH.
```

Current frontier bound: Guth–Maynard `N(σ,T) ≤ T^{30(1-σ)/13 + o(1)}` (arXiv:2405.20552,
2024) — the first substantial improvement to Ingham (1940) — characterized by Tao as
"a remarkable breakthrough towards the Riemann hypothesis (though still very far from
fully resolving this conjecture)." This is why a bound cannot close GAP-001 and an
exact-location (determinant/trace) mechanism is required.

## Corridor after V6.3

The walls leave three active routes:

1. WP5b — spectral shift / relative determinants.
2. WP5c — u-flow trace formula.
3. WP5a — critical coupling `σ ≤ 1/2`.
