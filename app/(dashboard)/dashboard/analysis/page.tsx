"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

type AnalysisList = { id: string; status: string; createdAt: string; file: { originalName: string } };

export default function AnalysisPage() {
  const [rows, setRows] = useState<AnalysisList[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/analyses", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setRows(data.analyses);
    })();
  }, []);

  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-2xl font-semibold">Analysis Results</h1>
        <p className="text-slate-300">Select a completed analysis to view KPI cards, charts, recommendations, and roadmap.</p>
      </Card>
      <Card>
        {rows.length === 0 ? <p className="text-sm text-slate-400">No analysis yet. Upload a file and run analysis.</p> : (
          <div className="space-y-2">
            {rows.map((row) => (
              <Link key={row.id} href={`/dashboard/analysis/${row.id}`} className="block rounded-xl border border-white/10 p-3 hover:bg-white/5">
                <p className="font-medium">{row.file.originalName}</p>
                <p className="text-sm text-slate-400">{row.status} · {new Date(row.createdAt).toLocaleString()}</p>
              </Link>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
