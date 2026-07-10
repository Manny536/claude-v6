#!/usr/bin/env python3
# ddatl002_gz_probe.py -- PEAICE-KAKEYALOGIC-DDATL-002 NUMERICS probe (d=2 pilot)
# CP discipline: deterministic (no RNG, no seeds, no fitted constants used as inputs).
# Independent cross-check: grid mass integral vs closed-form stadium area (different code paths).
# Measures (fan configuration KNS(LB), d=2, center 0, unit segments, tube radius delta):
#   (1) Identity I.1 consistency: E + |U| = integral(m)   [grid-exact; cross-checked vs analytic mass]
#   (2) Multiplicity profile exponent: m(r) ~ (delta+r)^(-(d-1)), d=2 -> slope -1
#   (3) Excess spectrum: dyadic-level distribution of excess mass; head share
#   (4) Raw normalized excess R_raw(delta) = E / Sigma|Y|  (expected: non-vanishing)
#   (5) supp(e) radius r2 = max{ r : m(x)>=2 }  (bush-carrier support check)
import numpy as np, hashlib, json, sys

def run(delta):
    N = int(round(np.pi / delta))                     # maximal ~delta-separated directions mod pi
    th = (np.arange(N) + 0.5) * np.pi / N
    W = np.stack([np.cos(th), np.sin(th)], 1)         # directions (N,2)
    h = delta / 4.0
    ax = np.arange(-0.7, 0.7 + h/2, h)
    X, Y = np.meshgrid(ax, ax, indexing="ij")
    P = np.stack([X.ravel(), Y.ravel()], 1)           # grid points (M,2)
    M = P.shape[0]
    m = np.zeros(M, dtype=np.int32)
    for j0 in range(0, N, 32):                        # chunk directions
        Wc = W[j0:j0+32]                              # (c,2)
        t = P @ Wc.T                                  # (M,c) signed projection
        tc = np.clip(t, -0.5, 0.5)
        D2 = (P[:, None, 0] - tc * Wc[None, :, 0])**2 + (P[:, None, 1] - tc * Wc[None, :, 1])**2
        m += (D2 <= delta * delta).sum(1).astype(np.int32)
    cell = h * h
    massG = cell * m.sum()                            # grid integral of m
    massA = N * (2 * delta * 1.0 + np.pi * delta**2)  # closed-form: N stadium areas
    U = cell * (m >= 1).sum()
    E = cell * np.maximum(m - 1, 0).sum()
    ident = E + U - massG                             # Identity I.1 on the grid (should be ~0)
    # (2) profile: median m on annuli, fit slope of log(med) vs log(delta+r)
    r = np.hypot(P[:, 0], P[:, 1])
    edges = np.geomspace(3 * delta, 0.4, 12)
    lx, ly = [], []
    for a, b in zip(edges[:-1], edges[1:]):
        sel = (r >= a) & (r < b) & (m >= 1)
        if sel.sum() > 30:
            lx.append(np.log((delta + 0.5 * (a + b))))
            ly.append(np.log(np.median(m[sel])))
    slope = np.polyfit(lx, ly, 1)[0] if len(lx) >= 4 else float("nan")
    # (3) excess spectrum over dyadic multiplicity levels
    exc = np.maximum(m - 1, 0).astype(np.float64)
    tot = exc.sum()
    spec = {}
    k = 1
    while 2**k <= m.max():
        sel = (m >= 2**k) & (m < 2**(k + 1))
        spec[f"2^{k}"] = round(float(exc[sel].sum() / tot), 4)
        k += 1
    thr = np.log(1 / delta)**2
    head = float(exc[m < thr].sum() / tot)
    r2 = float(r[m >= 2].max()) if (m >= 2).any() else 0.0
    return dict(delta=delta, N=N, grid=M,
                mass_grid=round(float(massG), 5), mass_analytic=round(float(massA), 5),
                mass_relerr=round(float(abs(massG - massA) / massA), 5),
                U=round(float(U), 5), E=round(float(E), 5),
                identity_resid=round(float(ident), 12),
                R_raw=round(float(E / massA), 4),
                profile_slope=round(float(slope), 3),
                head_share=round(head, 4), head_thr=round(float(thr), 2),
                supp_e_radius=round(r2, 4), spectrum=spec)

if __name__ == "__main__":
    out = [run(d) for d in (0.16, 0.08, 0.04, 0.02, 0.01)]
    src = open(sys.argv[0], "rb").read()
    stamp = dict(probe="ddatl002_gz_probe.py",
                 sha256=hashlib.sha256(src).hexdigest(),
                 python=sys.version.split()[0], numpy=np.__version__,
                 deterministic=True, rng=None)
    print(json.dumps(dict(stamp=stamp, results=out), indent=1))
