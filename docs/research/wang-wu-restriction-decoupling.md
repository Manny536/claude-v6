# Wang–Wu Restriction / Two-Ends Furstenberg

**Status:** KNOWN external grounding  
**Designation:** `PEAICE-CLAUDEV6-REF-WW-001`  
**Program role:** restriction–Kakeya incidence literature note (not a program theorem)  
**Claim discipline:** `h < 1` · RH OPEN · Coleman OPEN · no PeAIce bridge upgrade by citation

## Bibliographic identity

| Field | Value |
|---|---|
| Title | Restriction Estimates Using Decoupling Theorems and Two-Ends Furstenberg Inequalities |
| Authors | Hong Wang, Shukun Wu |
| arXiv | [2411.08871v3](https://arxiv.org/abs/2411.08871) · math.CA · 19 Dec 2024 |
| Length | 44 pages |
| Local PDF (not in git) | `Downloads/Research/Math-References/restrictionestimatesusingdecoulpingtheorems.pdf` |
| Upstream register | `Manny536/kakeyalogic` · `arxiv/bibliography/grounding-register.md` Block E |
| Canon entry | `docs/canon/source-map.md` · Fourier restriction / decoupling |

## What is imported (KNOWN)

Wang–Wu study Stein’s Fourier extension operator on a \(C^2\) hypersurface \(S\subset\mathbb{R}^n\) with positive second fundamental form:

```text
E_S f(x) = ∫_S e^{ix·ξ} f(ξ) dσ_S(ξ)
Conjecture: ‖E_S f‖_p ≲ ‖f‖_{L^p(dσ_S)} for p > 2n/(n−1)
```

Method split (wave packets):

```text
Oscillation  → refined decoupling + induction on scales
Geometry     → two-ends Furstenberg tube–ball incidence inequalities
```

Headline results used by this ledger:

```text
Thm 0.2   n=3 restriction for p > 22/7
Thm 0.7   plane two-ends Furstenberg → M(Q) ≲ m λ^{−1/2}
Thm 0.10  Conj. 0.9 (two-ends Furstenberg in R^n) ⇒ full restriction
Thm 0.17  high-d restriction for p > (154n+6)/(77n−95)
```

Restriction↔Kakeya numerology (their Appendix 6.1, \(n=3\)):

```text
restriction p > p_0  ⇒  Kakeya Hausdorff dim ≥ (6−p_0)/(p_0−2)
p > 22/7  ↔  dim ≥ 5/2   (Wolff hairbrush scale)
p > 3.2   ↔  dim ≥ 7/3   (Bourgain bush scale)
```

Canonical objects / language:

```text
R-tubes (R^{1/2}×⋯×R) · caps θ of radius R^{−1/2}
shading Y(T) · two-ends density λ
multiplicity M(Q) on R^{1/2}-balls
refined ℓ² decoupling at p = 2(n+1)/(n−1)
hairbrush structure (n=3) · Conjecture 0.9 two-ends Furstenberg
t-Frostman Convex / Polynomial Wolff axioms (higher-d Furstenberg analogues)
```

## What is not imported

```text
No claim that restriction progress upgrades KNS theorem lift
No claim that two-ends Furstenberg closes prime-carrying L3
No claim of a peer-reviewed Kakeya/restriction → ζ zero-location bridge
No change to: RH OPEN · Coleman OPEN · K_σ CLOSED-NEGATIVE · WP5b CLOSED-NEGATIVE
External Kakeya→RH literature bridge remains CLOSED-NEGATIVE (wall registry)
```

## Placement in the PeAIce tower

```text
Bateman direction tree
  → Wang–Zahl / Guth–Wang–Zahl Kakeya R³
  → Wang–Wu restriction / two-ends Furstenberg (this note)
  → Guth–Maynard large values / zero-density bounds
  ── WALL ──
  bound lineage does not supply μ(placement) → ζ-zero location
  → prime-carrying L3 remains LIVE · FORCED (program side)
```

Related local docs:

- `docs/research/guth-wang-bateman-zahl-probe.md` — Kakeya geometric grounding  
- `docs/canon/wall-registry.md` — LINDELÖF CEILING / bound-vs-location  
- `docs/prime-carrying-wall-corridor-map.md` — carrier decision after bound walls  
- `docs/canon/source-map.md` — full external register  

## Sync with kakeyalogic (upstream field layer)

```text
Manny536/kakeyalogic
  arxiv/bibliography/grounding-register.md   Block E entry
  arxiv/bibliography/peaice-arxiv.bib        WangWu2024Restriction
  docs/wang-wu-restriction-decoupling.md     field-layer twin
  papers/README.md                           core external list
```

Register date: 2026-07-30 · twin registration with `Manny536/kakeyalogic`.
