"use client";

import { useState } from "react";

function readNumber(value: string, minimum: number): number | null {
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(value.trim())) return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= minimum ? number : null;
}

function calculate(base: number, multiplier: number) {
  const final = base * multiplier;
  const increase = final - base;
  const percent = (multiplier - 1) * 100;
  return [final, increase, percent].every(Number.isFinite) ? { final, increase, percent } : null;
}

function format(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 6,
    ...(Math.abs(value) >= 1e15 || (value !== 0 && Math.abs(value) < 0.0001)
      ? { notation: "scientific" as const }
      : {}),
  }).format(value);
}

export function MutationCalculatorTool() {
  const [baseInput, setBaseInput] = useState("100");
  const [multiplierInput, setMultiplierInput] = useState("2");
  const [comparisonInput, setComparisonInput] = useState("");
  const base = readNumber(baseInput, 0);
  const multiplier = readNumber(multiplierInput, 1);
  const result = base !== null && multiplier !== null ? calculate(base, multiplier) : null;
  const comparisonMultiplier = readNumber(comparisonInput, 1);
  const comparison = base !== null && comparisonMultiplier !== null ? calculate(base, comparisonMultiplier) : null;
  const error = base === null
    ? "Enter a base income of zero or more using numbers only."
    : multiplier === null
      ? "Enter a custom multiplier of 1 or more. Use a decimal point, without commas or an × symbol."
      : !result
        ? "These values are too large to calculate. Enter smaller numbers."
        : null;
  const inputClass = "mt-2 w-full min-w-0 rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <section aria-label="Mutation income calculator" className="rounded-2xl border border-primary/40 bg-card p-5 md:p-6">
      <p className="text-sm text-muted-foreground">Custom values · Example inputs · Same income unit as your input</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label htmlFor="mutation-base" className="min-w-0 font-semibold">
          Base Pet Income
          <input id="mutation-base" type="text" inputMode="decimal" autoComplete="off" maxLength={320} value={baseInput} onChange={(event) => setBaseInput(event.target.value)} aria-invalid={base === null} aria-describedby="mutation-help mutation-result" className={inputClass} />
        </label>
        <label htmlFor="mutation-multiplier" className="min-w-0 font-semibold">
          Mutation Multiplier (×)
          <input id="mutation-multiplier" type="text" inputMode="decimal" autoComplete="off" maxLength={320} value={multiplierInput} onChange={(event) => setMultiplierInput(event.target.value)} aria-invalid={multiplier === null} aria-describedby="mutation-help mutation-result" className={inputClass} />
        </label>
      </div>
      <div id="mutation-result" aria-live="polite" aria-atomic="true" className="mt-5">
        {error ? <p className="text-sm text-foreground">{error}</p> : result ? (
          <dl className="grid gap-3 sm:grid-cols-3">
            <div><dt className="text-sm text-muted-foreground">Final Income</dt><dd className="break-all text-2xl font-bold text-primary">{format(result.final)}</dd></div>
            <div><dt className="text-sm text-muted-foreground">Increase Amount</dt><dd className="break-all text-2xl font-bold">{format(result.increase)}</dd></div>
            <div><dt className="text-sm text-muted-foreground">Increase Percentage</dt><dd className="break-all text-2xl font-bold">{format(result.percent)}%</dd></div>
          </dl>
        ) : null}
      </div>
      <p id="mutation-help" className="mt-4 text-sm leading-6 text-muted-foreground">Final income = base × multiplier. Enter a current custom value. The example 2× is not a verified game multiplier.</p>
      <details className="mt-4 border-t border-border pt-4">
        <summary className="cursor-pointer font-semibold text-primary">Compare a second custom multiplier</summary>
        <label htmlFor="mutation-comparison" className="mt-4 block max-w-sm font-semibold">
          Comparison Multiplier (×)
          <input id="mutation-comparison" type="text" inputMode="decimal" autoComplete="off" maxLength={320} value={comparisonInput} onChange={(event) => setComparisonInput(event.target.value)} aria-invalid={comparisonInput !== "" && comparisonMultiplier === null} aria-describedby="mutation-comparison-result" className={inputClass} />
        </label>
        <div id="mutation-comparison-result" aria-live="polite" aria-atomic="true" className="mt-4 text-sm leading-6">
          {comparisonInput === "" ? <p>Enter another multiplier to compare the same base income.</p> : comparisonMultiplier === null ? <p>Enter a comparison multiplier of 1 or more using numbers only.</p> : base === null ? <p>Enter a valid base income first.</p> : !comparison ? <p>These values are too large to calculate. Enter smaller numbers.</p> : (
            <dl className="grid gap-3 sm:grid-cols-3">
              <div><dt>Comparison Final Income</dt><dd className="break-all font-bold text-primary">{format(comparison.final)}</dd></div>
              <div><dt>Comparison Increase Amount</dt><dd className="break-all font-bold">{format(comparison.increase)}</dd></div>
              <div><dt>Comparison Increase Percentage</dt><dd className="break-all font-bold">{format(comparison.percent)}%</dd></div>
            </dl>
          )}
        </div>
      </details>
    </section>
  );
}
