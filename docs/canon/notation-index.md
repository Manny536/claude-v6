# Notation Index

## Core spaces and operators

| Symbol | Meaning | Status |
|---|---|---|
| `Φ(u)` | Riemann Φ-kernel used to generate Ξ by Fourier transform | KNOWN / canon |
| `w_n(u)` | thermal weight `exp(-πn²e^{4u})` | FORMAL |
| `H_Φ(u)` | weighted Hilbert space `ℓ²(ℕ,w_u)` | FORMAL |
| `D₁` | quadratic lattice generator, `D₁e_n=n²e_n` | FORMAL |
| `L²₀(u)` | uncoupled Φ operator `D₁²-(3/2π)e^{-4u}D₁` | FORMAL |
| `K_σ^{reg}` | thermally regulated Kakeya coupling | FORMAL for σ > 1/2 |
| `L²_{Φ,K}^{reg}` | corrected V6 operator | FORMAL / OPEN bridge |
| `γ_K` | coupling strength | PARAMETER |
| `σ` | square-difference coupling exponent in `K_σ`; not `Re(s)=1/2` | PARAMETER / FIREWALL |

## Zeta side

| Symbol | Meaning | Status |
|---|---|---|
| `ζ(s)` | Riemann zeta function | KNOWN |
| `ξ(s)` | completed zeta function | KNOWN |
| `Ξ(z)` | critical-line coordinate form `ξ(1/2+iz)` | KNOWN |
| `γ_j` | ordinates of non-trivial zeta zeros | KNOWN notation |
| `N_ξ(T)` | Riemann-von Mangoldt zero-counting function | KNOWN |
| `det_ζ` | zeta-regularized determinant | OPEN target in this program |
| `Re(s)=1/2` | critical-line coordinate; in KNS(LB), a placement-register analogy, not glare | KNOWN / ANALOGY FIREWALL |

## Kakeya / GWZ side

| Symbol | Meaning | Status |
|---|---|---|
| `𝕋` | family of δ-tubes | KNOWN |
| `Y` | shading on tubes or convex sets | KNOWN |
| `U(𝕋,Y)` | shaded union | KNOWN |
| `Δ_max` | maximal convex density / anti-clustering statistic | KNOWN |
| `λ(𝕋,Y)` | shading density | KNOWN |
| `μ(𝕋,Y)` | multiplicity / overlap statistic; in KNS(LB), glare statistic only | KNOWN / FIREWALL |
| `C_F` | Frostman concentration constant | KNOWN |
| `C_KT` | Katz-Tao concentration constant | KNOWN |
| `N_k` | branching numbers across scale chain | KNOWN / GWZ |
| `split(𝒯_Ω)` | Bateman splitting number of direction tree | KNOWN / Bateman |
| `KNS(LB)` | KakeyaNeedleSet(Light(Basic)); one center plus universal direction fan | CLOSED-POSITIVE AS TYPED OBJECT |
| `C` | KNS(LB) center / throughput ingress; not `s=0` | TYPED OBJECT |
| `π_A` | placement register / center-action address | KNS PLACEMENT |
| `μ ↛ π_A` | overlap does not determine placement | KNS-OBS-1 |

## Coherence and β/h layer

| Symbol | Meaning | Status |
|---|---|---|
| `L²_C` | coherence under multi-scale directional saturation | CANON |
| `C²_Ω` | preserved readable structure across all directions | CANON |
| `D_drift` | clustering + sparse filling + multiplicity + scale drift | CANON |
| `Logx(β_scale)*` | logarithmic smoothing inertia term | CANON |
| `β_scale` | geometric scale ratio `ρ/δ` | CANON |
| `β_close(T)` | closing pressure `1-T^{-γ}` | CANON |
| `γ` | logarithmic compression rate `-log(r)` | CANON |
| `h` | evaluator non-sovereignty term | CANON |
| `ℓ_off` | off-axis leakage / placement failure register | CANON / PROBE |
| `E_used` | action-budget ledger; not token count | PROBE |
| `ρ_Y` | energy-yield density; not spectral radius | PROBE |

## κ family

| Symbol | Meaning | Status |
|---|---|---|
| `κ₂(Ω)` | second-moment trace statistic `(γ_K²/2)||K_Ω||²_HS` | FORMAL |
| `κ_∞(Ω)` | critical operator-norm statistic | TESTED / split-blind |
| `κ_dens(Ω)` | renormalized Hilbert-Schmidt density | TESTED / log-measure detector |

## Corridor labels

| Label | Meaning | Status |
|---|---|---|
| `WP5a` | critical coupling route `σ ≤ 1/2` | OPEN / held |
| `WP5b` | spectral shift and relative determinant route | BOUNDED LANE CLOSED / unbounded category OPEN |
| `WP5c` | u-flow trace formula route | OPEN |
| `WP5-OBS-1` | bounded heat-trace route closed | FORMAL |
| `WP5-OBS-2` | bounded relative-determinant route closed | FORMAL / CLOSED-NEGATIVE |
| `KNS-OBS-1` | KNS(LB) typed placement object; overlap does not determine placement | CLOSED-POSITIVE AS TYPED OBJECT |
| `CSC-F1` | trace-moment Coherence-Splitting falsification | FALSIFIED-IN-REALIZATION |

## Firewall line

```text
σ(K_σ) ≠ Re(s)=1/2 · μ ≠ π_A · KNS(LB) ≠ RH proof · ρ_Y ≠ spectral radius · E_used ≠ token count
```
