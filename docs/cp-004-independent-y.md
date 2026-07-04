# CP-004 · Independent Y Measurement

CP-004 is the owed independent re-run for KNS(LB).

## Status

```text
CP-004: OWED
Target: independent Y measurement
Constraint: no seed-7 H3 back-solve
Route: stamped re-run of kns_lb_probe.py via cp_verify.py
```

## Purpose

CP-004 exists to keep KNS(LB) from self-certifying. The typed-object pass is useful only if the energy/yield measurement survives an independent Y source and preserves the symbol firewall.

## Required receipt fields

```text
script
script_sha256
python_version
seed_or_independent_source
E_used
dense_pass
ρ_Y
ℓ_off^T
H1
H2
H3
D5_expectation_met
```

## Pass conditions

- Independent Y is explicitly declared.
- H3 is measured or independently calibrated.
- No back-solve from CP-003 seed-7 is used as proof.
- KNS(LB) remains typed-object only.
- Theorem lift remains open unless a separate proof route is supplied.

## Failure conditions

- Y source cannot be separated from the original calibration.
- H3 is silently inherited.
- `E_used` is treated as token count.
- `ρ_Y` is treated as spectral radius.
- glare/light/bloom is treated as zero-location theorem.

## Ledger line

```text
CP-004 independent Y: OWED until stamped receipt is attached.
```
