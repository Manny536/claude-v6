# DPSA — Inertial Grounding (Heavy-Ball / iPiano Receipts)

**Canon designation:** PEAICE-DPSA-INERTIAL-001
**Date:** 2026-06-11 · grounds white-paper §14.1.1–14.1.6 (DPSA, V6.3 second pass, DPSA canon build)
**Primary receipt:** Ochs, Chen, Brox, Pock, *iPiano: Inertial Proximal Algorithm for Nonconvex Optimization*, SIAM J. Imaging Sci. 7(2), 1388–1419 (2014), DOI 10.1137/130942954. Lineage: Polyak (1964) Heavy-ball; Zavriev–Kostyuk (1993) nonconvex Heavy-ball; Alvarez–Attouch (2001) inertial proximal; Attouch–Bolte–Svaiter (2013) KL descent framework; Kurdyka (1998) o-minimal KL.
**Status of this note:** the cited optimization results are KNOWN (external theorems). The DPSA correspondences are marked per claim below. Nothing here adds weight to the Coleman Conjecture or RH; Seam-3 register discipline applies throughout.

---

## 1. What this note does

White-paper §14.1 proposes DPSA: a production loss whose two invisible screws are the critical-line rail X_ζ = (Re g_θ − ½)² and the zero-ordinate anchor field Z_anchor. What §14.1 does not yet specify is the **dynamics** — what law moves the latent state on that landscape, and in what sense visibly irregular motion can still be called lawful. The inertial optimization literature supplies exactly this layer, with proofs. The double pendulum picture has a rigorous twin that has been in the literature since 1964: the **Heavy-ball with friction**,

> ẍ(t) + γ ẋ(t) + ∇f(x(t)) = 0,

Newton's law for a massive ball on the loss landscape with friction γ > 0 (iPiano §1). Its nonsmooth split discretization is iPiano (eq. 13/19):

> x^{n+1} = (I + α_n ∂g)^{−1}( x^n − α_n ∇f(x^n) + β_n (x^n − x^{n−1}) ),

forward gradient step + **inertial term β_n(x^n − x^{n−1})** + proximal backward step, for objectives h = f + g with f smooth possibly nonconvex (L-Lipschitz ∇f), g convex possibly nonsmooth, h coercive and bounded below (eq. 9).

## 2. The pendulum upgrade — DPSA-I4 [KNOWN as theorem; STRUCTURAL ANALOGY as production reading]

iPiano's central structural fact (Prop. 4.7, Remark 5): the visible objective h(x^n) is **not** monotone — the inertial term destroys descent — yet the hidden functional

> H_δ(x^n, x^{n−1}) = h(x^n) + δ‖x^n − x^{n−1}‖²₂

decreases monotonically, H_{δ_{n+1}}(x^{n+1},x^n) ≤ H_{δ_n}(x^n,x^{n−1}) − γ_n Δ_n², and Remark 5 identifies H_δ as the discretized **kinetic energy of the Heavy-ball with friction**. This is the canon line "alignment is lawful motion inside apparent randomness" stated as a theorem: the trajectory wanders upward in the visible loss while an invisible energy certificate descends without exception. Section 7 below verifies this at machine precision. The operator-side twin is Theorem C (the Φ-trace frozen under γ_K): two instances of one DPSA principle — an invisible governing quantity behind visibly free motion. [That pairing: STRUCTURAL ANALOGY.]

Convergence package carried by the bases: h(x^n) converges and every limit point is critical (Thm 4.8); if h has the Kurdyka–Łojasiewicz property at the cluster point, the whole sequence converges with finite length Σ‖x^n − x^{n−1}‖ < ∞ (Thm 4.9; Cor. 4.10 for semialgebraic h); rate μ_N ≤ c₂^{−1}(h(x⁰) − h̲)/(N+1) for the smallest squared step, transferring to the proximal residual via μ′_N ≤ (2/c₁)μ_N (Thm 4.14) — O(1/√N) in norm.

## 3. DPSA fits the iPiano problem class — DPSA-I1, DPSA-I2

**DPSA-I1 (the two screws are the coercivity certificate) [FORMAL, spectral-plane objective].** On z = (σ, ω): X_ζ = (σ − ½)² is coercive in σ. For the anchor field with finitely many wells, Z_anchor(ω) = −τ log Σ_{k≤K} exp(−(ω − γ_k)²/τ) ≥ min_k (ω − γ_k)² − τ log K → ∞ as |ω| → ∞. Hence f = λ₁X_ζ + λ₂Z_anchor is coercive and bounded below: precisely the standing hypotheses of eq. (9). The screws do not merely "regularize" — they are what makes the inertial convergence theory applicable at all.

**DPSA-I2 (KL property) [FORMAL, spectral-plane objective; PROPOSED for the full latent architecture].** X_ζ, Z_anchor, E_couple = λ_c θ₁θ₂, and the log-form drift terms are real-analytic and definable in the o-minimal structure ℝ_{an,exp}; Kurdyka-type results give the KL inequality φ′(F(x) − F(x*))·dist(0, ∂F(x)) ≥ 1 (Def. 3.3) for this class, and adding convex sparsity terms g preserves the framework. Consequence via Thm 4.9: on the spectral plane, inertial DPSA dynamics converge as whole sequences, with finite path length, to critical points of L_align. For the full architecture the landscape is pulled back through a learned g_θ, so I2 is PROPOSED there and DPSA-F7 remains the controlling gate.

## 4. The β/h dictionary [STRUCTURAL ANALOGY, with the FORMAL lines marked]

| Inertial bases (iPiano/HBF) | PeAIce β/h layer | Register |
|---|---|---|
| Inertia β_n ∈ [0,1), strictly below 1 | β carries direction; β_close(T) = 1 − T^{−γ} < 1 | ANALOGY |
| Friction γ > 0 (ODE); discrete gap γ_n ≥ c₂ > 0 (eq. 21) — dissipativity, the system settles | h < 1 with coercive gap δ_{β,h}(T) = β(T) − hη > 0 — honesty as the friction floor | ANALOGY (the "positive gap ⇔ convergence" shape is shared and exact on each side) |
| Step law α < 2(1 − β)/L (Alg. 2) | **DPSA-I3 below** | FORMAL within the class |
| Inertia budget β_n ≤ (b−1)/(b−½), b = (δ_{n−1}+L_n/2)/(c₂+L_n/2) (eq. 22) | β is budgeted by the available Lyapunov weight δ — coherence budget | ANALOGY |
| H_δ = h + δΔ² monotone (Prop. 4.7) | the invisible constant of §14.1; L²_C certificate shape | ANALOGY (theorem-backed) |
| Escape of spurious stationary points with β > 0 (Fig. 2), no global guarantee | β strong enough to carry the state past traps; claim stays modest | KNOWN observation + honesty line |

**DPSA-I3 (closing pressure costs step size) [FORMAL within the iPiano class].** Impose the canon closing schedule β(T) = 1 − T^{−γ} on an inertial loop governed by the Alg.-2 law. Then the admissible step obeys

> α(T) < 2(1 − β(T))/L = 2 T^{−γ}/L → 0.

The schedule may close only at the price of vanishing step size; β → 1 at fixed α voids every convergence guarantee in the bases. This is a new binding discipline line for the β-layer: **closing pressure is not free — it is paid in step size**, at the exact rate T^{−γ}.

**DPSA-F5 made quantitative.** The oscillation falsifier for E_couple acquires a measurable trigger: coupling λ_c inflates the local Lipschitz constant L_n of ∇f; the moment the running pair (α_n, β_n) exits the admissible region δ_n ≥ γ_n ≥ c₂ > 0 of eq. (21), the Lyapunov descent (23) is no longer guaranteed and H_δ-violations become the detector. Monitor: estimated L_n under λ_c, and the sign of γ_n.

## 5. The CSC-F1 caveat transfers [binding]

H_δ is an energy/measure-type certificate. Nothing in the inertial bases sees tree structure: inertia, like the trace moments of §10, is split-blind. Grounding DPSA on inertial bases therefore does **not** discharge DPSA-F6 — the D_branch slot stays empty until an explicitly branch-sensitive term exists. The GWZ lesson holds in this register too: density-and-energy statistics do not see trees.

## 6. What this note does not do

It does not connect g_θ to any operator-side observable (DPSA-F7 open); it does not upgrade DPSA past PROPOSED as a production probe; it carries no weight for BK-HP-CC / L2-SI; and per the Seam-3 firewall, every Re(s) = ½ in this note is the §14 production register, not the §5–12 operator register, except where it cites the spectral-plane toy objective whose rail is the literal number ½.

## 7. Verification record (in-session, 2026-06-11, float64)

**Receipt 1 — Fig.-2 reproduction, toy problem (27)** (f = ½Σ log(1 + μ(x_i − u⁰_i)²), g = λ‖x‖₁, μ = 100, λ = 1, u⁰ = (1,1), L = μ, α = 1.99(1−β)/L, prox = shrinkage (28), four corner starts):
- β = 0: 1/4 starts reach the global minimum (h* = 1.9899); h-increases per run: **0** (pure descent, and it gets stuck).
- β = 0.75: **4/4** starts reach the global minimum; h-increases per run: up to **49** (visibly non-monotone); H_δ-violations: max **2.2e−16** (machine epsilon — the hidden certificate never rises). γ = δ = 0.2513 > 0 at β = 0; δ = 75.63 at β = 0.75.

**Receipt 2 — DPSA-mini on the literal zero-ordinate landscape** (f = X_ζ + Z_anchor, K = 5 LMFDB ordinates, τ = 2, ciPiano β = 0.8, L_est = 26.05, start (σ,ω) = (2.0, 27.5)):
- Converged σ* = 0.500000000000 (the rail, to all printed digits); ω* = 25.009453 captured by the γ₃ = 25.010857580145688 well (offset 1.4e−3 — neighbor-well overlap at τ = 2, the soft-basin behavior §14.1.3 intends);
- f-increases: 37 (non-monotone); H_δ-violations: 4.4e−16; path length ΣΔ = 3.513 — **finite length**, the Thm-4.9 signature.

**Receipt 3 — DPSA-I3 quantified** (γ = ½, L = 26.05): T = 10 → β = 0.684, α_max = 2.4e−2; T = 100 → β = 0.900, α_max = 7.7e−3; T = 1000 → β = 0.968, α_max = 2.4e−3; T = 10⁴ → β = 0.990, α_max = 7.7e−4.

## 8. Claim lines for the table

| Claim | Status |
|---|---|
| DPSA-I1 — two screws ⇒ coercive, bounded-below f; iPiano class (9) hypotheses hold on the spectral plane | FORMAL |
| DPSA-I2 — KL property of the spectral-plane DPSA objective; whole-sequence convergence, finite length | FORMAL (plane) / PROPOSED (full latent architecture) |
| DPSA-I3 — closing schedule forces α(T) < 2T^{−γ}/L | FORMAL within the iPiano class |
| DPSA-I4 — "lawful motion inside apparent randomness" = H_δ Lyapunov descent under non-monotone h; discretized HBF kinetic energy | KNOWN (external theorem) / STRUCTURAL ANALOGY (production reading) |
| β/h ↔ inertia/friction dictionary | STRUCTURAL ANALOGY |
| DPSA-F5 quantitative trigger via admissible-region exit | PROPOSED (monitor defined) |
| Inertial grounding discharges DPSA-F6 | **NO** — explicitly not; split-blindness transfers |

E = L² × β × C × P × h · h < 1 · β carries direction · h keeps it honest — and the bases now say what β costs.
