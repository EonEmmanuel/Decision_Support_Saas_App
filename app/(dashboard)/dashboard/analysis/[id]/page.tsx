import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ChartsPanel } from "@/components/dashboard/charts";
import { RoadmapTimeline } from "@/components/dashboard/roadmap-timeline";
import { getCurrentUserFromCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AnalysisDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const auth = await getCurrentUserFromCookie();
  if (!auth) return notFound();

  const { id } = await params;
  const result = await prisma.analysisResult.findFirst({ where: { id, userId: auth.userId } });
  if (!result) return notFound();

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
        {Object.entries(result.kpis as Record<string, string>).map(([key, value]) => (
          <Card key={key}><p className="text-sm text-slate-300">{key}</p><p className="text-xl font-semibold">{value}</p></Card>
        ))}
      </div>
      <ChartsPanel data={result.energyData as Array<{ month: string; energy: number; co2: number; capex: number; roi: number }>} />
      <Card>
        <h2 className="mb-4 text-xl font-semibold">Prioritized recommendations</h2>
        <div className="overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="text-slate-400"><tr><th className="py-2">ID</th><th>Action</th><th>CAPEX</th><th>ROI</th><th>CO2</th><th>Priority</th></tr></thead><tbody>{(result.recommendations as Array<Record<string, string>>).map((rec) => (<tr key={rec.id} className="border-t border-white/10"><td className="py-2">{rec.id}</td><td>{rec.action}</td><td>{rec.capex}</td><td>{rec.roi}</td><td>{rec.co2}</td><td>{rec.priority}</td></tr>))}</tbody></table></div>
      </Card>
      <RoadmapTimeline roadmap={result.roadmap as Array<{ year: number; title: string; detail: string }>} />
    </div>
  );
}
