# Claude V6 — Trace-Neutral Kakeya Operator

**Canon designation:** `PEAICE-CLAUDEV6-WHITEPAPER-001`  
**Program:** PeAIce Research Program · KakeyaLogic · L²_C Framework  
**Version state:** Claude V6.3, second-pass buildout  
**Status:** OPEN — operator constructed, conjecture open, corridor named

This repository is the public canonical buildout for the Claude V6 phase of the Coleman Conjecture / KakeyaLogic research program.

Claude V6 converts the earlier V5 bridge statement into a corrected operator program:

```text
V6  = K_sigma^reg + Theorems A-C + trace neutrality + L2-5 closed
V6.3 = Theorems D-F + WP5-OBS-1 + CSC-F1 + surviving corridor
```

The core claim discipline remains active:

```text
E = L² × β × C × P × h
h < 1
β-Protocol claim marking active
```

No file in this repository claims a proof of the Riemann Hypothesis. The Riemann Hypothesis is OPEN. The Coleman Conjecture is OPEN. The repository records a corrected operator, six formal theorems, two closed routes, one falsified natural realization of the Coherence-Splitting Conjecture, and three remaining research corridors.

## Repository map

```text
docs/
  README.md
  canon/
    status-block.md
    beta-protocol.md
    v6-theorems.md
    wall-registry.md
    notation-index.md
    source-map.md
  whitepaper/
    PEAICE-CLAUDEV6-WHITEPAPER-001.md
  research/
    guth-wang-bateman-zahl-probe.md
    wp5b-spectral-shift-roadmap.md
    wp5c-u-flow-trace-formula.md
    wp5a-critical-coupling.md
papers/
  README.md
```

## Canon state

### FORMAL

- Theorem A — thermally regulated coupling is symmetric on `H_Φ(u)`.
- Theorem B — `K_σ^{reg}` is Hilbert-Schmidt for `σ > 1/2`.
- Theorem C — the regulated coupling is trace-neutral and preserves the Φ-trace.
- L2-5 — the eigenvalue-by-eigenvalue route is closed by counting mismatch.
- Theorem D — exact two-term Φ-sector heat trace.
- Theorem E — first-order semigroup trace neutrality and second-moment coupling law.
- Theorem F — bounded-coupling heat-trace rigidity.
- WP5-OBS-1 — the bounded-coupling heat route is closed.

### FALSIFIED-IN-REALIZATION

- CSC-F1 — the trace-moment κ family detects log-measure / density statistics, not Bateman splitting number.

### OPEN

- Coleman Conjecture: `KB -> Re(s)=1/2`.
- Determinant target: `det_ζ(L²_{Φ,K}^{reg} - (z² + 1/4)) = C · Ξ(z)`.
- WP5b — Krein spectral shift and relative determinant route.
- WP5c — u-flow trace formula route.
- WP5a — critical coupling regime `σ ≤ 1/2`.

## Core equations

```text
w_n(u) = exp(-π n² e^{4u})
H_Φ(u) = ℓ²(ℕ, w_u)
D₁ e_n = n² e_n
L²₀(u) = D₁² - (3/2π)e^{-4u}D₁
```

```text
K_σ^{reg}(m,n)
= |m² - n²|^{-σ} (w_m(u)/w_n(u))^{1/2}
= |m² - n²|^{-σ} exp(-π(m²-n²)e^{4u}/2),  m ≠ n
K_σ^{reg}(n,n) = 0
```

```text
L²_{Φ,K}^{reg}(u)
= D₁² - (3/2π)e^{-4u}D₁ + γ_K K_σ^{reg}
```

```text
Tr_{w_u}(2π²e^{9u} L²_{Φ,K}^{reg}(u)) = Φ(u)
```

## Current research entry point

The next live corridor is **WP5b**:

```text
Compute the Krein spectral shift ξ(λ; L²_{Φ,K}^{reg}, L²_Φ)
and test whether relative determinant data escapes Theorem F rigidity.
```

If the determinant-ratio route inherits bounded heat-trace rigidity, WP5b becomes WP5-OBS-2 and the corridor narrows to the u-flow axis alone.

## Source grounding

The repo is grounded against:

- Bateman, Kakeya sets and directional maximal operators in the plane.
- Wang-Zahl, volume estimates for unions of convex sets and the Kakeya theorem in R³.
- Guth-Wang-Zahl, streamlined proof of the Kakeya theorem in R³.
- Spectral determinant / relative determinant machinery.
- PeAIce Claude V6 white paper, V6.3 heat-trace addendum, and downstream canon.

See `docs/canon/source-map.md` and `papers/README.md`.

## License

MIT license for repository text unless otherwise marked. External papers remain under their original authors' licenses and arXiv / publisher terms.
