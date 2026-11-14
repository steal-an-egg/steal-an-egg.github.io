"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import type { EggRecord } from "@/data/egg-catalog";

export function EggCatalog({ entries }: { entries: readonly EggRecord[] }) {
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("");
  const searchText = query.trim().toLowerCase();
  const sources = Array.from(new Set(entries.map((entry) => entry.source)));
  const matches = entries.filter((entry) =>
    (!source || entry.source === source) &&
    `${entry.name} ${entry.source} ${entry.kind}`.toLowerCase().includes(searchText)
  );

  return (
    <div className="mt-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Search eggs
          <Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. Cosmic Egg" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Biome or source
          <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={source} onChange={(event) => setSource(event.target.value)}>
            <option value="">All sources</option>
            {sources.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
      </div>

      <p className="my-3 text-sm text-muted-foreground" aria-live="polite">
        Showing {matches.length} of {entries.length} documented entries
      </p>

      {matches.length ? (
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full table-fixed text-left text-sm">
            <caption className="sr-only">Documented Steal an Egg eggs and egg pools</caption>
            <thead className="bg-surface-accent">
              <tr>
                <th scope="col" className="w-[40%] px-2 py-2.5 sm:px-4">Egg or pool</th>
                <th scope="col" className="w-[35%] px-2 py-2.5 sm:px-4">Biome or source</th>
                <th scope="col" className="px-2 py-2.5 sm:px-4">Type</th>
              </tr>
            </thead>
            <tbody>
              {matches.map(({ name, source, kind, href }) => (
                <tr key={name} className="border-t border-border align-top">
                  <th scope="row" className="break-words px-2 py-2.5 font-semibold sm:px-4"><Link href={href} className="underline decoration-primary underline-offset-4 hover:text-primary">{name}</Link></th>
                  <td className="break-words px-2 py-2.5 text-muted-foreground sm:px-4">{source}</td>
                  <td className="break-words px-2 py-2.5 text-muted-foreground sm:px-4">{kind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-xl border border-border p-4 text-sm text-muted-foreground">
          No matching eggs. <button type="button" className="font-semibold text-foreground underline" onClick={() => { setQuery(""); setSource(""); }}>Clear filters</button>
        </p>
      )}
    </div>
  );
}
