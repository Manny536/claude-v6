# WP5b — Spectral Shift and Relative Determinant Roadmap

**Status:** **V6.5 — bounded lane CLOSED-NEGATIVE** (`WP5-OBS-2`) · L1/L2/L3 LIVE

> **V6.5 closure (July 2026).** Fable 5 scaffold + Grok cross-derivation + TERMINAL-004
> extraction. For operator-bounded coupling (`γ_K K_σ^{reg}`, `σ > ½`), the relative-determinant
> route does not escape Theorem F — it is closed by Theorem H (bounded Krein SSF). See
> `wp5b-bounded-lane-closure.md` and `docs/canon/v6-theorems.md#theorem-h`.

## Question

Does relative determinant data escape Theorem F heat-trace rigidity, or does it inherit the same obstruction?

**V6.5 answer (bounded lane):** Inherits obstruction — **no escape**. Provably stronger than
Theorem F via uniformly bounded spectral shift (Theorem H).

## Setup

Let

```text
D = L²_Φ        (model: diag(λ_n), λ_n = c n⁴)
A = L²_{Φ,K}^{reg} = D + γ_K K_σ^{reg}
```

with `σ > 1/2`, so `K_σ^{reg}` is Hilbert-Schmidt and bounded as an operator perturbation.

The plain heat trace is rigid:

```text
Tr(e^{-tA}) - Tr(e^{-tD}) = O(t^{3/4}).
```

WP5b uses modified functionals:

```text
spectral shift ξ(λ; A,D)
relative zeta functions
relative determinants
determinant ratios
```

## First proof obligation — DISCHARGED [V6.5]

Construct the spectral shift functional for the pair `(A,D)`.

**Result:** `R_D(z) ∈ S₁`. `R_A(z) − R_D(z) ∈ S₁` unconditionally for bounded coupling.
Discrete Krein: `ξ(λ) = N_D(λ) − N_A(λ)`. **Theorem H:** `|ξ|` bounded, thin support.

## Determinant object

```text
B_z = γ_K K_σ^{reg}(D-z)^{-1}
D_rel(z) = det(I + B_z)     [ordinary det when Tr B_z = 0]
```

Log derivative is Cauchy transform of bounded `ξ` — cannot host genus-1 Ξ growth under
`λ = z² + ¼` dictionary.

## Gate

### WP5-OBS-2 — CLOSED-NEGATIVE [V6.5, bounded lane]

The relative determinant is coupling-rigid: all WP5b functionals are transforms of one bounded `ξ`.

**Load-bearing qualifier:** operator-boundedness. Covers `γ_K K_σ^{reg}` for all `σ > ½`.
Does NOT close unbounded mods (L1), changed free operator, or WP5c traces (L2).

### WP5b-live (remaining lanes)

| Lane | Content | Status |
|------|---------|--------|
| **L1** | Unbounded / relative modifications; `ξ` may be unbounded | **LIVE** |
| **L2** | `Tr_{w_u}`, u-flow traces — eigenvector data | **WP5c door** |
| **L3** | Prime-carrying ladder `log p^k` | **relocation target · FORCED** |

## Expected pressure point

The determinant must see prime-side structure:

```text
Σ_n Λ(n)n^{-1/2} f(log n)
```

Bounded `ξ` (Theorem H) excludes von Mangoldt counting — prime-carrying relocation forced (R1).

## Claim discipline

WP5b bounded lane is **CLOSED-NEGATIVE**. No determinant identity with Ξ is claimed.
RH OPEN · Coleman OPEN.