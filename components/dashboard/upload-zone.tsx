"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const initialFiles = [
  { name: "portfolio_q1.xlsx", status: "completed" },
  { name: "asset_pack_fr.xlsx", status: "processing" },
  { name: "retrofit_scenarios.xlsx", status: "uploaded" }
];

export function UploadZone() {
  const [files] = useState(initialFiles);

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 text-center hover:bg-white/10">
          <UploadCloud className="mb-3 h-8 w-8 text-cyan-300" />
          <p className="font-medium">Drag & drop Excel files</p>
          <p className="text-sm text-slate-400">or click to browse (.xlsx, .xls, .csv)</p>
          <input type="file" className="hidden" multiple />
        </label>
      </Card>
      <Card>
        <h3 className="mb-4 font-semibold">Upload queue</h3>
        <div className="space-y-3">
          {files.map((file) => (
            <div key={file.name} className="rounded-xl bg-white/5 p-3">
              <p className="truncate text-sm">{file.name}</p>
              <div className="mt-2 flex items-center justify-between">
                <Badge>{file.status}</Badge>
                <div className="h-1 w-20 rounded-full bg-white/10">
                  <div className={`h-1 rounded-full bg-cyan-300 ${file.status === "completed" ? "w-full" : file.status === "processing" ? "w-2/3" : "w-1/4"}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
