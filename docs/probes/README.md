# Probes

Executable receipts for Claude V6 / DDATL corridors.

## ddatl002_gz_probe.py

Deterministic d=2 fan (KNS(LB) pilot) for Grain Zero / excess-mass identity.

```bash
python3 docs/probes/ddatl002_gz_probe.py
```

| Check | Expected |
|-------|----------|
| Identity I.1 residual | ~0 on grid |
| R_raw = E/ΣY | non-vanishing (~0.83 → ~0.87 as δ↓) |
| profile slope | → −1 = −(d−1) |
| supp e radius r₂ | → 1/2 + δ (bush cell) |

**Receipt:** `probe_out.json` (script sha256 in stamp).  
**Tag:** NUMERICS · not a d=3 vanishing proof · CP-004-style independent mass leg via analytic stadium area.
