# One Line, No Deadline Met — @syukuran entry

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/syukuran/no-deadline-syukuran/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/syukuran/no-deadline-syukuran/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

Entry for the [One Line, No Deadline Met](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce) competition on [make.fun](https://make.fun): a program that writes one single-line joke giving an excuse for a missed deadline, capped at 200 characters.

## The line

> I didn't miss the deadline, the deadline ghosted me — I texted it twice, it left me on read, so I took the hint and stopped trying.

(131 characters, one line.)

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line above to
`/output/entry.txt` — or to `$MAKEFUN_OUTPUT` when set, for local checks —
after validating it against the gate: 1–200 characters, at most 200 UTF-8
bytes, a single non-whitespace line.

## Run it

```sh
node main.ts
```

## Self-check

Run twice; the outputs are byte-identical (sha256
`6702909bcf361eae89d28b02731e4e0502e850a3fa3b324fe59c3ff2ecb955e0`).
