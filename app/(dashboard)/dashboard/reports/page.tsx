"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ReportsPage() {
  const [message, setMessage] = useState("");

  const exportReport = async (type: "pdf" | "ppt") => {
    const res = await fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type })
    });
    const data = await res.json();
    setMessage(res.ok ? data.message : data.error);
  };

  return (
    <div className="space-y-4">
      <Card className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-slate-300">Generate investment-ready exports for committees and clients.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => exportReport("pdf")}>Export PDF</Button>
          <Button variant="secondary" onClick={() => exportReport("ppt")}>Export PowerPoint</Button>
        </div>
      </Card>
      {message ? <Card><p className="text-sm text-cyan-200">{message}</p></Card> : null}
      <Card><h2 className="mb-3 font-semibold">Preview</h2><Skeleton className="h-80 w-full" /></Card>
    </div>
  );
}
