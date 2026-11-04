"use client";

import { useId, useState } from "react";

type Entries = { base: string; mutation: string; size: string; quantity: string };
const defaults: Entries = { base: "100", mutation: "1", size: "1", quantity: "1" };
const fields = [
  { key: "base", label: "Base income per second", min: 0, hint: "Cash / second per pet. Use digits, without commas or M/B." },
  { key: "mutation", label: "Mutation multiplier", min: 0, hint: "Custom factor; 1 = unchanged. Avoid counting a bonus twice." },
  { key: "size", label: "Size / weight multiplier (optional custom value)", min: 0, hint: "Leave at 1 if unknown. Enter a factor, not kilograms." },
  { key: "quantity", label: "Quantity", min: 1, hint: "Whole number of identical earners, at least 1." },
] as const;

function read(raw: string, min = 0, integer = false): number | null {
  if (!/^\d+(?:\.\d*)?$/.test(raw.trim())) return null;
  const n = Number(raw);
  return Number.isFinite(n) && n >= min && (!integer || Number.isSafeInteger(n)) ? n : null;
}
function estimate(entries: Entries, minutes: number | null) {
  const base = read(entries.base), mutation = read(entries.mutation), size = read(entries.size), quantity = read(entries.quantity, 1, true);
  if (base === null || mutation === null || size === null || quantity === null || minutes === null) return null;
  const baseline = base * quantity;
  const second = base * mutation * size * quantity;
  const difference = second - baseline;
  const percent = baseline > 0 ? difference / baseline * 100 : null;
  const totals = [second, second * 60, second * 3600, second * 86400, second * minutes * 60, difference];
  if (!Number.isFinite(baseline) || totals.some(n => !Number.isFinite(n)) || (percent !== null && !Number.isFinite(percent))) return null;
  return { second, totals, percent };
}
function format(n: number) {
  if (n !== 0 && Math.abs(n) < 0.01) return n < 0 ? "> −0.01" : "< 0.01";
  return n.toLocaleString("en-US", { maximumFractionDigits: 2, useGrouping: true });
}

export function ValueCalculatorTool() {
  const id = useId();
  const [a, setA] = useState<Entries>({ ...defaults });
  const [b, setB] = useState<Entries>({ ...defaults });
  const [session, setSession] = useState("30");
  const [compare, setCompare] = useState(false);
  const minutes = read(session);
  const resultA = estimate(a, minutes), resultB = estimate(b, minutes);

  function inputs(name: string, entries: Entries, update: (value: Entries) => void) {
    return <fieldset className="min-w-0"><legend className="mb-3 text-lg font-bold">{name}</legend>
      <div className="grid gap-4 sm:grid-cols-2">{fields.map(f => {
        const inputId = `${id}-${name}-${f.key}`;
        const invalid = read(entries[f.key], f.min, f.key === "quantity") === null;
        return <div key={f.key} className="min-w-0">
          <label htmlFor={inputId} className="block text-sm font-semibold">{f.label}</label>
          <input id={inputId} type="text" inputMode={f.key === "quantity" ? "numeric" : "decimal"} value={entries[f.key]}
            onChange={e => update({ ...entries, [f.key]: e.target.value })}
            aria-invalid={invalid} aria-describedby={`${inputId}-hint`}
            className="mt-2 w-full min-w-0 rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          <p id={`${inputId}-hint`} className={`mt-1 text-xs leading-5 ${invalid ? "text-foreground" : "text-muted-foreground"}`}>
            {invalid ? `Enter ${f.key === "quantity" ? "a whole number of at least 1" : "zero or a positive decimal"}.` : f.hint}
          </p>
        </div>;
      })}</div>
    </fieldset>;
  }
  const labels = ["Income / second", "Income / minute", "Income / hour", "Income / day (24h)", "Selected session income", "Difference vs base / second"];
  function results(name: string, result: ReturnType<typeof estimate>) {
    return <section aria-label={`${name} earning results`} className="mt-5 min-w-0">
      <h3 className="font-bold">{name} earning value</h3>
      {result ? <><dl className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{labels.map((label, i) => <div key={label} className="min-w-0 rounded-lg border border-border bg-background p-3"><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 break-all text-lg font-bold">{format(result.totals[i])} <span className="text-xs font-normal">cash</span></dd></div>)}</dl><p className="mt-3 break-all text-sm">Increase vs unmodified group: {result.percent === null ? "Percentage unavailable: zero baseline." : `${format(result.percent)}%`}</p></> : <p role="status" className="mt-3 rounded-lg border border-border p-3">Complete the fields with valid numbers. If all entries are valid, reduce their size: the calculation exceeds the supported numeric range.</p>}
    </section>;
  }
  const difference = resultA && resultB ? resultA.second - resultB.second : null;
  const percentage = resultB && resultB.second > 0 && difference !== null ? difference / resultB.second * 100 : null;
  return <section aria-label="Pet earning value calculator" className="mt-6 min-w-0 rounded-2xl border border-border bg-card p-4 md:p-6">
    <h2 className="mb-2 text-xl font-bold">Calculate pet earning value</h2>
    <p className="mb-5 text-sm text-muted-foreground">Default numbers are examples only. All results are cash earnings, not trade prices.</p>
    {inputs("Pet A", a, setA)}
    <div className="mt-4 max-w-sm">
      <label htmlFor={`${id}-session`} className="text-sm font-semibold">Session duration (minutes)</label>
      <input id={`${id}-session`} type="text" inputMode="decimal" value={session} onChange={e => setSession(e.target.value)} aria-invalid={minutes === null} aria-describedby={`${id}-session-hint`} className="mt-2 w-full min-w-0 rounded-lg border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
      <p id={`${id}-session-hint`} className="mt-1 text-xs text-muted-foreground">{minutes === null ? "Enter zero or a positive number of minutes." : "Assumes constant earnings for the selected time."}</p>
    </div>
    {results("Pet A", resultA)}
    <label className="mt-6 flex cursor-pointer items-center gap-3 text-sm font-semibold"><input type="checkbox" checked={compare} onChange={e => setCompare(e.target.checked)} className="h-4 w-4 accent-primary" />Compare Pet B</label>
    {compare ? <div className="mt-5 border-t border-border pt-5">
      {inputs("Pet B", b, setB)}{results("Pet B", resultB)}
      <div className="mt-5 break-all rounded-lg border border-border p-4" role="status">
        {difference !== null && Number.isFinite(difference * 3600) ? <>
          <p>A earns {format(Math.abs(difference))} cash / second {difference >= 0 ? "more" : "less"} than B{difference === 0 ? " (equal earnings)" : ""}.</p>
          <p className="mt-2">Hourly difference (A − B): {format(difference * 3600)} cash.</p>
          <p className="mt-2">Percentage difference relative to B: {percentage === null ? "Unavailable: B has zero income." : Number.isFinite(percentage) ? `${format(percentage)}%` : "Outside the supported range; reduce the difference between inputs."}</p>
        </> : <p>Enter valid values in both setups to compare earning power.</p>}
      </div>
    </div> : null}
    <button type="button" onClick={() => { setA({ ...defaults }); setB({ ...defaults }); setSession("30"); setCompare(false); }} className="mt-5 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-surface-accent focus:ring-2 focus:ring-primary">Reset examples</button>
  </section>;
}
