"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type FileRow = { id: string; originalName: string; status: "uploaded" | "processing" | "completed"; createdAt: string };

export function UploadZone() {
  const [files, setFiles] = useState<FileRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [analyzingId, setAnalyzingId] = useState("");
  const router = useRouter();

  const loadFiles = async () => {
    const res = await fetch("/api/files", { cache: "no-store" });
    const data = await res.json();
    if (res.ok) setFiles(data.files);
    setLoading(false);
  };

  useEffect(() => { void loadFiles(); }, []);

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = event.target.files?.[0];
    if (!chosen) return;
    setError("");
    setUploading(true);
    const formData = new FormData();
    formData.append("file", chosen);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const data = await res.json();
    setUploading(false);
    if (!res.ok) return setError(data.error ?? "Upload failed");
    setFiles((prev) => [data.file, ...prev]);
  };

  const runAnalysis = async (fileId: string) => {
    setAnalyzingId(fileId);
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileId })
    });
    const data = await res.json();
    setAnalyzingId("");
    if (!res.ok) return setError(data.error ?? "Analyze failed");
    await loadFiles();
    router.push(`/dashboard/analysis/${data.analysisId}`);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 text-center hover:bg-white/10">
          <UploadCloud className="mb-3 h-8 w-8 text-cyan-300" />
          <p className="font-medium">Drag & drop Excel files</p>
          <p className="text-sm text-slate-400">or click to browse (.xlsx, .xls, .csv)</p>
          <input type="file" className="hidden" accept=".xlsx,.xls,.csv" onChange={onFileChange} />
        </label>
        {uploading ? <p className="mt-3 text-sm text-cyan-200">Uploading...</p> : null}
        {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
      </Card>
      <Card>
        <h3 className="mb-4 font-semibold">Upload queue</h3>
        {loading ? <p className="text-sm text-slate-400">Loading files...</p> : null}
        {!loading && files.length === 0 ? <p className="text-sm text-slate-400">No files uploaded yet.</p> : null}
        <div className="space-y-3">
          {files.map((file) => (
            <div key={file.id} className="rounded-xl bg-white/5 p-3">
              <p className="truncate text-sm">{file.originalName}</p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <Badge>{file.status}</Badge>
                <Button size="sm" disabled={analyzingId === file.id || file.status === "processing"} onClick={() => runAnalysis(file.id)}>
                  {analyzingId === file.id ? "Analyzing..." : "Analyze"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
