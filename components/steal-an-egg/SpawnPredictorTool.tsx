"use client";

import { useEffect, useMemo, useState } from "react";
import { Bell, Clock3, RotateCcw, TimerReset } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const STORAGE_KEY = "steal-an-egg-spawn-predictor";
const RARE_ALERT_FEEDBACK_STORAGE_KEY = "rare_egg_alert_499_feedback";

type FeedbackState = "yes" | "no" | null;

type StoredSettings = {
  lastObserved: string;
  minutes: string;
  seconds: string;
};

const RARE_ALERT_EVENT_PARAMS = {
  page_path: "/eggs/spawn-predictor/",
  experiment: "rare_egg_alert_one_time_499",
  offer_price: 4.99,
  currency: "USD",
  pricing_model: "one_time",
};

function trackGa4Event(eventName: string) {
  if (typeof window === "undefined") return;

  const gtag = (
    window as Window & {
      gtag?: (
        command: "event",
        name: string,
        params: Record<string, string | number>,
      ) => void;
    }
  ).gtag;

  if (typeof gtag === "function") {
    gtag("event", eventName, RARE_ALERT_EVENT_PARAMS);
  }
}

function toLocalInputValue(date: Date) {
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function formatCountdown(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

export function SpawnPredictorTool() {
  const [lastObserved, setLastObserved] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [targetTime, setTargetTime] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [message, setMessage] = useState("Enter an interval observed in your server to create an estimate.");
  const [isRareAlertDialogOpen, setIsRareAlertDialogOpen] = useState(false);
  const [rareAlertFeedback, setRareAlertFeedback] = useState<FeedbackState>(null);

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const settings = JSON.parse(stored) as StoredSettings;
          setLastObserved(settings.lastObserved || toLocalInputValue(new Date()));
          setMinutes(settings.minutes || "");
          setSeconds(settings.seconds || "");
          return;
        } catch {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
      setLastObserved(toLocalInputValue(new Date()));
    }, 0);
    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (targetTime === null) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [targetTime]);

  useEffect(() => {
    const restoreFeedback = window.setTimeout(() => {
      const storedFeedback = window.localStorage.getItem(RARE_ALERT_FEEDBACK_STORAGE_KEY);
      if (storedFeedback === "yes" || storedFeedback === "no") {
        setRareAlertFeedback(storedFeedback);
      }
    }, 0);
    return () => window.clearTimeout(restoreFeedback);
  }, []);

  const countdown = useMemo(
    () => (targetTime === null ? "--:--:--" : formatCountdown(targetTime - now)),
    [now, targetTime],
  );

  function startTimer() {
    const observedAt = new Date(lastObserved).getTime();
    const intervalSeconds = Number(minutes || 0) * 60 + Number(seconds || 0);

    if (!Number.isFinite(observedAt)) {
      setMessage("Choose a valid last observed spawn time.");
      return;
    }
    if (!Number.isFinite(intervalSeconds) || intervalSeconds <= 0) {
      setMessage("Enter a custom interval greater than zero. No official interval is assumed.");
      return;
    }

    const intervalMilliseconds = intervalSeconds * 1000;
    const currentTime = Date.now();
    const completedCycles = Math.max(0, Math.floor((currentTime - observedAt) / intervalMilliseconds));
    let estimate = observedAt + (completedCycles + 1) * intervalMilliseconds;
    if (estimate <= currentTime) estimate += intervalMilliseconds;

    setNow(currentTime);
    setTargetTime(estimate);
    setMessage("Estimate running from your own observation and custom interval.");
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lastObserved, minutes, seconds } satisfies StoredSettings));
  }

  function resetTimer() {
    const current = toLocalInputValue(new Date());
    setLastObserved(current);
    setMinutes("");
    setSeconds("");
    setTargetTime(null);
    setNow(Date.now());
    setMessage("Timer reset. Enter a server observation and interval to begin again.");
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function useRareEggPreset() {
    setMinutes("5");
    setSeconds("0");
    setMessage("Five-minute rare-egg reference selected. Re-sync it to an alert or reset in your current server.");
  }

  function openRareAlertDialog() {
    const storedFeedback = window.localStorage.getItem(RARE_ALERT_FEEDBACK_STORAGE_KEY);
    if (storedFeedback === "yes" || storedFeedback === "no") {
      setRareAlertFeedback(storedFeedback);
      return;
    }

    trackGa4Event("rare_alert_cta_click");
    setRareAlertFeedback(null);
    setIsRareAlertDialogOpen(true);
  }

  function respondToRareAlertOffer(response: "yes" | "no") {
    trackGa4Event(response === "yes" ? "rare_alert_pay_yes" : "rare_alert_pay_no");
    window.localStorage.setItem(RARE_ALERT_FEEDBACK_STORAGE_KEY, response);
    setRareAlertFeedback(response);
  }

  return (
    <section className="rounded-3xl border border-primary/40 bg-card p-6 shadow-2xl shadow-black/20 md:p-9" aria-labelledby="spawn-predictor-tool-title">
      <div className="flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Browser-based estimate</p>
          <h2 id="spawn-predictor-tool-title" className="section-title">Steal An Egg Spawn Predictor &amp; Timer</h2>
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-muted-foreground">
          Saved locally on this device
        </div>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground">Set Your Last Observed Spawn</h3>
            <label htmlFor="last-observed-spawn" className="mt-4 block text-sm font-semibold text-foreground">Last Observed Spawn Time</label>
            <input
              id="last-observed-spawn"
              type="datetime-local"
              value={lastObserved}
              onChange={(event) => setLastObserved(event.target.value)}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground">Start Your Egg Spawn Timer</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Use a custom interval you personally observed, or select the five-minute rare-egg reference previously stated in the official game description. Re-sync after updates or server changes.</p>
            <fieldset className="mt-4 grid grid-cols-2 gap-4">
              <legend className="sr-only">Custom Spawn Interval</legend>
              <label className="text-sm font-semibold text-foreground">
                Minutes
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="1440"
                  value={minutes}
                  onChange={(event) => setMinutes(event.target.value)}
                  placeholder="0"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="text-sm font-semibold text-foreground">
                Seconds
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="59"
                  value={seconds}
                  onChange={(event) => setSeconds(event.target.value)}
                  placeholder="0"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
            </fieldset>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={useRareEggPreset} className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-primary/10 px-5 py-3 font-bold text-foreground transition hover:border-primary">
                Use 5:00 Rare Egg Reference
              </button>
              <button type="button" onClick={startTimer} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:bg-primary/85">
                <Clock3 className="h-5 w-5" aria-hidden="true" /> Start Timer
              </button>
              <button type="button" onClick={resetTimer} className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 font-bold text-foreground transition hover:border-primary/60">
                <RotateCcw className="h-5 w-5" aria-hidden="true" /> Reset Timer
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-background p-6 text-center">
          <TimerReset className="mx-auto h-9 w-9 text-primary" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-bold text-foreground">Check the Estimated Next Spawn</h3>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Countdown</p>
          <output className="mt-2 block font-mono text-4xl font-bold tabular-nums text-primary md:text-5xl" aria-live="polite">{countdown}</output>
          <p className="mt-6 text-sm font-semibold text-muted-foreground">Estimated Next Spawn</p>
          <output className="mt-2 block text-lg font-bold text-foreground">
            {targetTime === null ? "Waiting for your input" : new Date(targetTime).toLocaleString()}
          </output>
          <p className="mt-5 text-sm leading-6 text-muted-foreground" aria-live="polite">{message}</p>
        </div>
      </div>

      <p className="mt-7 rounded-xl border border-secondary/30 bg-surface-accent px-4 py-3 text-sm font-semibold leading-6 text-foreground">
        This predictor is not connected to your Roblox server. It estimates timing from the information you enter.
      </p>

      <div className="mt-5 rounded-xl border border-primary/20 bg-background/60 p-4 md:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Rare Egg Alerts</p>
        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-foreground">Want real-time Rare Egg Alerts?</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">Get notified about Divine, Eternal and Secret Egg opportunities without constantly checking the timer.</p>
          </div>
          {rareAlertFeedback ? (
            <button type="button" disabled className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-muted px-4 py-2.5 text-sm font-bold text-muted-foreground">
              ✓ Feedback Recorded
            </button>
          ) : (
            <button type="button" onClick={openRareAlertDialog} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/85">
              <Bell className="h-4 w-4" aria-hidden="true" /> Get Rare Egg Alerts
            </button>
          )}
        </div>
        {rareAlertFeedback && <p className="mt-3 text-xs text-muted-foreground">Thanks for helping us decide what to build next.</p>}
      </div>

      <AlertDialog open={isRareAlertDialogOpen} onOpenChange={setIsRareAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <div>{rareAlertFeedback ? "Thanks for your feedback!" : "Would you pay $4.99 once for Rare Egg Alerts?"}</div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              {rareAlertFeedback === "yes"
                ? "We’ve recorded that you’d consider paying a one-time $4.99 for Rare Egg Alerts."
                : rareAlertFeedback === "no"
                  ? "We’ve recorded that you’d prefer to use Rare Egg Alerts for free."
                  : "If reliable Rare Egg Alerts were available for Divine, Eternal and Secret Egg opportunities, would you pay a one-time $4.99 to unlock them?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {rareAlertFeedback ? (
              <AlertDialogAction>Close</AlertDialogAction>
            ) : (
              <>
                <button type="button" onClick={() => respondToRareAlertOffer("no")} className="mt-2 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:mt-0">
                  No, I&apos;d only use it free
                </button>
                <button type="button" onClick={() => respondToRareAlertOffer("yes")} className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85">
                  Yes, I&apos;d pay $4.99 once
                </button>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
