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
