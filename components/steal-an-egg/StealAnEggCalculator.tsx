"use client";

import { useMemo, useState } from "react";
import { Calculator, Clock3, Route, WalletCards } from "lucide-react";

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
};

function numberFrom(value: string) {
  if (value.trim() === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
}

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "Add a valid value";
  if (seconds === 0) return "Ready now";
  if (seconds < 60) return `${formatNumber(seconds)} seconds`;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.round(seconds % 60);
  if (hours > 0) return `${hours}h ${minutes}m ${remainingSeconds}s`;
  return `${minutes}m ${remainingSeconds}s`;
}

function NumberField({ id, label, value, onChange, hint }: FieldProps) {
  const invalid = value.trim() !== "" && numberFrom(value) === null;
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <input
        id={id}
        inputMode="decimal"
        min="0"
        step="any"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        aria-invalid={invalid || undefined}
        aria-describedby={hint || invalid ? `${id}-hint` : undefined}
      />
      {(hint || invalid) ? <span id={`${id}-hint`} className={`text-xs font-normal ${invalid ? "text-destructive" : "text-muted-foreground"}`}>{invalid ? "Enter zero or a positive number." : hint}</span> : null}
    </label>
  );
}

function Result({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">{label}</p>
      <output className="mt-2 block break-words text-xl font-bold text-primary" aria-live="polite">{value}</output>
      {detail ? <p className="mt-2 text-xs leading-5 text-muted-foreground">{detail}</p> : null}
    </div>
  );
}

export function StealAnEggCalculator() {
  const [cash, setCash] = useState("");
  const [income, setIncome] = useState("");
  const [targetCost, setTargetCost] = useState("");
  const [incomeSession, setIncomeSession] = useState("");
  const [runSession, setRunSession] = useState("");
  const [roundTrip, setRoundTrip] = useState("");
  const [buffer, setBuffer] = useState("0");

  const incomeResults = useMemo(() => {
    const currentCash = numberFrom(cash);
    const incomePerSecond = numberFrom(income);
    const target = numberFrom(targetCost);
    const sessionMinutes = numberFrom(incomeSession);
    const hasGoal = currentCash !== null && target !== null;
    const remaining = hasGoal ? Math.max(0, target - currentCash) : null;
    const time = remaining !== null && incomePerSecond !== null && incomePerSecond > 0 ? remaining / incomePerSecond : null;
    const projected = currentCash !== null && incomePerSecond !== null && sessionMinutes !== null
      ? currentCash + incomePerSecond * sessionMinutes * 60
      : null;
    return { remaining, time, projected, incomePerSecond, hasGoal };
  }, [cash, income, targetCost, incomeSession]);

  const runResults = useMemo(() => {
    const sessionMinutes = numberFrom(runSession);
    const roundTripSeconds = numberFrom(roundTrip);
    const bufferMinutes = numberFrom(buffer);
    if (sessionMinutes === null || bufferMinutes === null) return null;
    const availableSeconds = Math.max(0, sessionMinutes * 60 - bufferMinutes * 60);
    if (roundTripSeconds === null || roundTripSeconds <= 0) return { availableSeconds, fullRuns: null, unusedSeconds: null };
    const fullRuns = Math.floor(availableSeconds / roundTripSeconds);
    return { availableSeconds, fullRuns, unusedSeconds: availableSeconds - fullRuns * roundTripSeconds };
  }, [runSession, roundTrip, buffer]);

  return (
    <section className="rounded-3xl border border-primary/35 bg-card p-5 shadow-xl shadow-black/10 md:p-8" aria-label="Steal An Egg Calculator">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Calculator className="h-6 w-6" aria-hidden="true" /></div>
        <div>
          <p className="section-kicker">Local planning tool</p>
          <h2 className="mt-1 text-3xl font-bold text-primary">Steal An Egg Income and Upgrade Calculator</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">Enter the values visible in your game. This calculator estimates your goal and session totals in this browser only; it does not connect to Roblox or assume pet stats, bonuses, or hidden formulas.</p>
        </div>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,.8fr)]">
        <div className="rounded-2xl border border-border bg-surface-secondary p-5 md:p-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-foreground"><WalletCards className="h-5 w-5 text-primary" aria-hidden="true" /> Enter Your Current Cash and Income</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <NumberField id="current-cash" label="Current Cash" value={cash} onChange={setCash} />
            <NumberField id="income-per-second" label="Current Income Per Second" value={income} onChange={setIncome} />
            <NumberField id="target-cost" label="Target Upgrade Cost" value={targetCost} onChange={setTargetCost} />
            <NumberField id="income-session" label="Optional Session Length (minutes)" value={incomeSession} onChange={setIncomeSession} />
          </div>
        </div>
        <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5 md:p-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-foreground"><Clock3 className="h-5 w-5 text-primary" aria-hidden="true" /> Estimate Time to Your Next Upgrade</h3>
          <div className="mt-5 grid gap-3">
            <Result label="Cash Still Needed" value={incomeResults.remaining === null ? "Add cash and a target" : formatNumber(incomeResults.remaining)} />
            <Result label="Estimated Time to Afford" value={incomeResults.remaining === 0 ? "Ready now" : incomeResults.time === null ? incomeResults.hasGoal && incomeResults.incomePerSecond === 0 ? "Income must be above 0" : "Add valid goal values" : formatDuration(incomeResults.time)} detail="Estimate based on the values entered." />
            <Result label="Projected Cash After Session" value={incomeResults.projected === null ? "Add session values" : formatNumber(incomeResults.projected)} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,.8fr)]">
        <div className="rounded-2xl border border-border bg-surface-secondary p-5 md:p-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary"><Route className="h-6 w-6" aria-hidden="true" /> Steal An Egg Run Calculator</h2>
          <h3 className="mt-5 text-xl font-bold text-foreground">Enter Your Average Round-Trip Time</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <NumberField id="run-session" label="Session Length (minutes)" value={runSession} onChange={setRunSession} />
            <NumberField id="round-trip" label="Round-Trip Time Per Run (seconds)" value={roundTrip} onChange={setRoundTrip} />
            <NumberField id="safety-buffer" label="Safety Buffer (minutes)" value={buffer} onChange={setBuffer} hint="Optional; defaults to 0." />
          </div>
        </div>
        <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5 md:p-6">
          <h3 className="text-xl font-bold text-foreground">Estimate Full Egg Runs per Session</h3>
          <div className="mt-5 grid gap-3">
            <Result label="Estimated Full Runs" value={runResults?.fullRuns === null || runResults === null ? "Add session and run time" : formatNumber(runResults.fullRuns)} />
            <Result label="Active Run Time" value={runResults === null ? "Add valid session values" : formatDuration(runResults.availableSeconds)} />
            <Result label="Remaining Buffer / Unused Time" value={runResults?.unusedSeconds === null || runResults === null ? "Add a round-trip time" : formatDuration(runResults.unusedSeconds)} />
          </div>
        </div>
      </div>

      <p className="mt-6 rounded-xl border border-secondary/30 bg-surface-accent px-4 py-3 text-sm font-semibold leading-6 text-foreground">Formula: remaining cash = max(0, target cost − current cash); time to goal = remaining cash ÷ income per second; runs = floor(available seconds ÷ round-trip seconds). Your inputs stay on this device.</p>
    </section>
  );
}
