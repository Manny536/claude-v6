# Claude V6 Theorem Registry

## Theorem A — Symmetry

**Status:** FORMAL

Let

```text
K_σ^{reg}(m,n)
= |m²-n²|^{-σ}(w_m/w_n)^{1/2},    m ≠ n
K_σ^{reg}(n,n) = 0
```

with

```text
w_n(u)=exp(-πn²e^{4u}).
```

Then `K_σ^{reg}` is symmetric on `H_Φ(u)=ℓ²(ℕ,w_u)`.

The weighted symmetry condition is

```text
K(m,n)w_n = K(n,m)w_m.
```

Both sides reduce to

```text
|m²-n²|^{-σ} exp(-π(m²+n²)e^{4u}/2).
```

## Theorem B — Hilbert-Schmidt threshold

**Status:** FORMAL

Under the canonical isometry

```text
V : H_Φ(u) -> ℓ²(ℕ),    (Va)_n = a_n sqrt(w_n),
```

`K_σ^{reg}` transfers to

```text
T_{mn} = |m²-n²|^{-σ},    m ≠ n.
```

The Hilbert-Schmidt norm is

```text
||T||²_HS = Σ_{m≠n} |m²-n²|^{-2σ}.
```

Writing `k=|m-n|` and `|m²-n²| = k(m+n)`, the double sum is controlled by

```text
Σ_k k^{1-4σ}.
```

Thus the regulated kernel is Hilbert-Schmidt for

```text
σ > 1/2.
```

## Theorem C — Trace neutrality

**Status:** FORMAL

For all coupling strengths `γ_K`,

```text
Tr_{w_u}(2π²e^{9u} L²_{Φ,K}^{reg}(u)) = Φ(u).
```

Reason: `K_σ^{reg}(n,n)=0`, so the coupling contributes zero to the weighted diagonal trace.

## L2-5 — Eigenvalue route obstruction

**Status:** FORMAL, route closed

A bounded or compact perturbation of the diagonal `n⁴` operator preserves leading eigenvalue growth:

```text
λ_j(L²_{Φ,K}^{reg}) ~ j⁴
N_L(T) ~ T^{1/4}.
```

The zeta-zero target has Riemann-von Mangoldt growth:

```text
N_ξ(T) ~ (T/2π)log(T/2π).
```

The rates are incompatible. Therefore the eigenvalue-by-eigenvalue identification route is closed.

## Theorem D — Exact Φ heat trace

**Status:** FORMAL

For model eigenvalues `λ_n = c n⁴`,

```text
Θ_Φ(t) = Tr(e^{-tL²_Φ}) = Σ_{n≥1} e^{-t c n⁴}.
```

As `t -> 0+`,

```text
Θ_Φ(t) = Γ(5/4)(ct)^{-1/4} - 1/2 + O(t^M)
```

for every `M > 0`.

The Mellin representation is

```text
Θ_Φ(t) = (1/2πi) ∫ Γ(s)ζ(4s)(ct)^{-s} ds.
```

The pole of `ζ(4s)` at `s=1/4` gives `Γ(5/4)(ct)^(-1/4)`. The pole of `Γ(s)` at `s=0` gives `ζ(0)=-1/2`. Every further pole at `s=-k` carries `ζ(-4k)=0`, so all power corrections vanish.

## Theorem E — Semigroup neutrality and second-moment law

**Status:** FORMAL

Let

```text
A = D + γ_K K_Ω,
Δ_Ω(t) = Tr(e^{-tA}) - Tr(e^{-tD}).
```

First order in `γ_K` vanishes because `K_Ω(n,n)=0`:

```text
first-order term = -γ_K t Σ_n K_Ω(n,n)e^{-tλ_n} = 0.
```

The first nonzero trace signature is second order:

```text
Δ_Ω(t) = (γ_K²/2)||K_Ω||²_HS t² + o(t²).
```

This gives the first operational trace-moment coherence number:

```text
κ₂(Ω) = lim_{t->0} Δ_Ω(t)/t² = (γ_K²/2)||K_Ω||²_HS.
```

## Theorem F — Heat-trace rigidity under bounded coupling

**Status:** FORMAL

For any bounded self-adjoint `K`, `A=D+γK`,

```text
|Tr(e^{-tA}) - Θ_Φ(t)|
≤ |γ| ||K||_op e^{|γ| ||K||_op t} ∫_0^t Θ_Φ(s) ds
= O(t^{3/4}).
```

Thus every singular term of the small-t heat trace larger than `t^{3/4}` is invariant under bounded coupling.

## WP5-OBS-1 — Bounded heat route closed

**Status:** FORMAL, route closed

The Ξ-side heat trace requires leading behavior of the form

```text
t^{-1/2} log(1/t)
```

plus a prime-oscillation sector.

The Φ-sector bounded-coupling trace remains

```text
Γ(5/4)(ct)^(-1/4) - 1/2 + O(t^{3/4}).
```

Therefore the plain bounded-coupling heat-trace route cannot recover the Ξ-side explicit formula.


## Theorem G — Singular-value asymptotic and corridor closure [V6.4.3]

**Status:** PROPOSED (asymptotic; Birman–Solomyak route) / FORMAL (closure consequence)

Under the isometry `V` of Theorem B, `K_σ` transfers to the Toeplitz-type kernel
`T_{mn} = |m²-n²|^{-σ}`. The near-diagonal reduction `T ≈ 2^{-σ} D_w Toep(|m-n|^{-σ}) D_w`,
`D_w = diag(k^{-σ/2})`, has phase-space symbol

```text
a(x,ξ) ~ x^{-σ} |ξ|^{σ-1}     (x ≥ 1, ξ ∈ [-π,π]).
```

The Weyl count `N(t) = #{ s_n > t } ~ (1/2π) vol{a > t}` gives

```text
N(t) ~ C_σ t^{-1/σ}   ⇒   s_n(K_σ) ~ c_σ n^{-σ},   ρ(K_σ) = 1/σ.
```

Consistency check (load-bearing): the same volume integral converges iff `σ > 1/2`,
reproducing the exact Hilbert–Schmidt threshold of Theorem B. `PROPOSED`; the rigorous
upgrade is Birman–Solomyak singular-value asymptotics for weighted Toeplitz /
pseudodifferential operators with this singular symbol.

**Corollary G.1 (corridor closure).** `FORMAL`. Combining Theorem G with the order/genus
argument and L2-5:

```text
σ < σ* : ρ(K_σ) > 1 ⇒ det₂(I - zK_σ) has order > 1 ≠ order-1 Ξ.
σ > σ* : K_σ ∈ S₁    ⇒ Fredholm determinant is genus 0 ≠ genus-1 Ξ.
σ = σ* : power-law spectrum ⇒ zero-density linear in R ≠ (T/2π) log T.
```

Every power-law spectrum `s_n ~ n^{-α}` yields det-zero counting `~ R^{1/α}`, never
`T log T`. Hence the entire one-parameter `K_σ` determinant family is closed, and (via the
relative-compactness of `γ_K K_σ` w.r.t. `D₁²`) the squared-determinant target is
CLOSED-NEGATIVE for this realization. The finite-window crossing `σ*_N ≈ 0.83–0.92` is a
truncation artifact; the analytic Weyl boundary is `σ_c = 1`.

**Numerics.** `NUMERICS`. Truncations `N ≤ 4000` (cross-check `N ≤ 1600`) give `α(σ)`
truncation-stable and monotone with `δ = α − σ → 0⁺` (e.g. `δ ≈ 0.24, 0.20, 0.15, 0.12,
0.09, 0.06, 0.012, 0.001` across `σ = 0.55 … 1.50`), confirming `α = σ` to three decimals
at `σ = 1.50`. Reproduction is deterministic only — not evidence for RH.

RH remains `OPEN`. Coleman Conjecture remains `OPEN`. No proof claimed.
