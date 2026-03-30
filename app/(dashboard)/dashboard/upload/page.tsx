import { UploadZone } from "@/components/dashboard/upload-zone";
import { Card } from "@/components/ui/card";

export default function UploadPage() {
  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-2xl font-semibold">File Upload</h1>
        <p className="text-slate-300">Upload building-level Excel files to start the analysis pipeline.</p>
      </Card>
      <UploadZone />
    </div>
  );
}
