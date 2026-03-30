import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <Card className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-slate-300">Generate investment-ready exports for committees and clients.</p>
        </div>
        <div className="flex gap-2">
          <Button>Export PDF</Button>
          <Button variant="secondary">Export PowerPoint</Button>
        </div>
      </Card>
      <Card>
        <h2 className="mb-3 font-semibold">Preview</h2>
        <Skeleton className="h-80 w-full" />
      </Card>
      <Card>
        <h2 className="mb-2 font-semibold">Empty state example</h2>
        <p className="text-sm text-slate-400">No generated report yet. Upload data and run analysis to enable report previews.</p>
      </Card>
      <Card>
        <h2 className="mb-2 font-semibold">Error state example</h2>
        <p className="text-sm text-rose-300">Report generation failed due to a temporary API issue. Please retry.</p>
      </Card>
    </div>
  );
}
