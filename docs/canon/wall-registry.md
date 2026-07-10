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

## WP5-OBS-2 (V6.5)

**Status:** FORMAL / CLOSED-NEGATIVE — bounded relative-determinant route closed

For operator-bounded coupling (`γ_K K_σ^{reg}`, all `σ > 1/2`, all `γ_K`, and any bounded
kernel replacement), the WP5b relative-determinant corridor does not escape Theorem F.
The mechanism is stronger than heat-trace rigidity alone:

```text
ξ(λ) = N_D(λ) − N_A(λ)     uniformly bounded, thin support (Theorem H)
```

All WP5b functionals are transforms of bounded `ξ`:

```text
heat trace       → Laplace(ξ)   → O(t^{3/4})
relative zeta    → Mellin(ξ)    → L2-5 bridge
perturbation det → Cauchy(ξ)    → genus capped; no order-1 Ξ data
```

**Load-bearing qualifier:** operator-boundedness. Does NOT assert closure for unbounded
modifications (L1), changed free operator, or WP5c u-flow traces (L2).

Complements `#hs-corridor` (Theorem G) and pair determinant C3 by SSF boundedness.

**Live continuation:** L1 unbounded · L2 WP5c · L3 prime-carrying (forced by R1).

**Source:** Fable 5 WP5b scaffold · Grok TERMINAL-004 · principal promote July 2026.

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

## KREIN-RANK1 (V6.5 · KNS-LB pass)

**Status:** PROPOSED-FOR-CANON — rank-one / KSSF face of Weyl-stability wall · Grok TERMINAL-005 CONFIRM

For rank-one perturbations `A → A + λ(·,φ)φ`, the Krein spectral shift is the
phase shift of the spectral-measure pair `(μ,ν)`:

```text
1 + πλ𝒦μ = exp[𝒦u] = [1 − πλ𝒦ν]^{−1}     [Poltoratski 1996, §3]
```

[P96] Theorem 4.1: all self-adjoint rank-one perturbations are pure point ⟺ `σ(A)` is
countable. Corollary 4.4 extends to trace class. Essential spectrum is Weyl–von Neumann
stable under such moves.

**Consequence on the n⁴ / K_σ ladder:** no bounded, trace-class, or KSSF-mediated
rank-one injection changes the counting class to Riemann–von Mangoldt density. Prime
content must live in the measure-pair / function-system data (NB·BD carrier), not in
perturbations of a fixed geometric operator.

**Relation:** face of the same Weyl-stability family as L2-5, WP5-OBS-1, HS-CORRIDOR,
WP5-OBS-2, Theorem H. Does **not** assert a new obstruction beyond that family.

**Source:** Fable 5 KNS-LB pass · `PEAICE-CLAUDEV6-KNS-LB-PAPER-001` §7 · Grok TERMINAL-005.

## DDATL-002-C0 — untyped Grain Zero collapse

**Status:** FORMAL / WALL — untyped residual target is vacuous

DEEPEN-001 found the exact failure mode of the first DDATL-002 residual definition. If
`C_{δ,ρ}` is merely a measurable carrier with an open-ended structure list, then the
choice

```text
C = { x : m_δ(x) ≥ 2 }
```

absorbs the full support of `e_δ = (m_δ - 1)_+`, giving `dG₀ ≡ 0`. Thus the original
untyped target is true for the wrong reason.

**Consequence:** DDATL-002 must use typed, stage-indexed residuals:

```text
G₀^σ_{δ,ρ} := inf { ∫_{R³ \ C} e_δ dx : C ∈ Adm_σ(δ,ρ) }
```

with:

```text
K1 catalogue   — source-pinned carrier cell type
K2 budget      — stage-metered cardinality / resource budget
K3 extraction  — proof-generated tube-cluster relation
```

Untyped `G₀` is a wall. Typed `G₀^σ` remains live.

## DDATL-002-SYMBOL-WALLS

**Status:** FORMAL / SOURCE-HYGIENE WALL

GWZ / WZ symbols must not be overloaded by PeAIce program symbols:

| Source symbol | Wall rule |
|---|---|
| `β_GWZ` | GWZ loss exponent; distinct from PeAIce `β` |
| `η_GWZ` | GWZ tolerance exponent; do not reuse for program weak losses |
| `λ_GWZ` | GWZ shading density; program multiplicity threshold is `τ`, never `λ` |
| `ζ_GWZ` | GWZ density-surplus exponent; not Riemann `ζ(s)` |
| `Δ_max` | source clustering functional; import only with source scope |

## CP-005 — excess-spectrum diagnostic

**Status:** GREENLIGHT / NUMERICS / DIAGNOSTIC

CP-005 measures the dyadic excess spectrum:

```text
ε_k(δ) := E_δ^{-1} ∫_{ {2^k ≤ m_δ < 2^{k+1}} } (m_δ - 1) dx.
```

Purpose: decide whether GWZ-critical `R³` families appear head-dominated or tail-dominated.

```text
head-dominated → threshold superlevel coverage SC(τ) insufficient; pair channel primary
tail-dominated → superlevel coverage route may carry 002.A
```

CP-005 does not prove residual vanishing, does not prove a zeta bridge, and does not close RH or the Coleman Conjecture.

## Corridor after V6.5

The walls leave three active routes (WP5b bounded lane now closed):

1. **WP5b-L1** — unbounded / relative spectral-shift category (Yafaev Ch. 8 frame).
2. **WP5c** — u-flow trace formula (eigenvector data, not spectral lists).
3. **WP5a** — critical coupling `σ ≤ 1/2` (held until renormalization specified).

**Prime-carrying ladder (L3)** is the forced relocation target: R1 requires unbounded `ξ`
at `√λ log λ` scale — incompatible with Theorem H unless coupling unbounded or free
operator changes. See `docs/research/wp5b-bounded-lane-closure.md`.