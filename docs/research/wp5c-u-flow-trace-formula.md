# WP5c — u-flow Trace Formula Roadmap

**Status:** OPEN, second active corridor

## Question

Can the thermal parameter `u` carry arithmetic information through variation of the trace family, even when the pointwise heat trace is bounded-coupling rigid?

## Setup

The Φ-kernel depends on `u` through

```text
w_n(u) = exp(-πn²e^{4u})
```

and

```text
Φ(u) = Σ_{n≥1}(2π²n⁴e^{9u} - 3πn²e^{5u}) exp(-πn²e^{4u}).
```

The Ξ function is generated from Φ by Fourier transform:

```text
Ξ(z) = ∫ Φ(u)e^{izu} du
```

up to the conventional normalization.

## Why WP5c survives

Theorem F is pointwise in `u` and constrains the plain heat trace at fixed `u`.

It does not automatically constrain:

```text
∂_u Tr(e^{-tL(u)})
∂_u log det_rel(L(u)-z)
transport equations across u
de Bruijn-Newman deformation along the thermal axis
```

## First proof obligation

Differentiate the operator family:

```text
L(u)=L²_{Φ,K}^{reg}(u)
```

and compute

```text
∂_u L(u)
```

including both the diagonal Φ-sector and the regulated coupling term.

Then test Duhamel variation:

```text
∂_u Tr(e^{-tL(u)})
= -t Tr((∂_u L(u))e^{-tL(u)})
```

where justified.

## Gate

### WP5c-live

WP5c remains live if `u`-variation exposes structure not reducible to the rigid pointwise heat trace.

### WP5c-closed

WP5c closes if every `u`-variation is expressible purely through the already-known Φ-sector, with no coupling-sensitive arithmetic channel.

## Link to de Bruijn-Newman axis

The DDATL host carries axes:

```text
Re(s)
Im(s)
de Bruijn-Newman heat parameter
the Φ integral variable u
```

WP5c is the corridor that uses the fourth axis directly.

## Claim discipline

WP5c is OPEN. It is structurally closest to the Ξ integral representation, but no determinant identity is claimed.
