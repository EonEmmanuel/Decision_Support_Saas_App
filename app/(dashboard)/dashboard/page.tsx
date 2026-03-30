import { prisma } from "@/lib/prisma";
import { getCurrentUserFromCookie } from "@/lib/auth";
import { Card } from "@/components/ui/card";
import { ChartsPanel } from "@/components/dashboard/charts";
import { mockAnalysisPayload } from "@/lib/mock-data";

export default async function DashboardHomePage() {
  const auth = await getCurrentUserFromCookie();
  const filesCount = auth ? await prisma.file.count({ where: { userId: auth.userId } }) : 0;
  const analysesCount = auth ? await prisma.analysisResult.count({ where: { userId: auth.userId } }) : 0;

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card><p className="text-sm text-slate-300">Uploaded Files</p><p className="mt-2 text-2xl font-semibold">{filesCount}</p></Card>
        <Card><p className="text-sm text-slate-300">Analyses Completed</p><p className="mt-2 text-2xl font-semibold">{analysesCount}</p></Card>
        <Card><p className="text-sm text-slate-300">CO2 Emissions</p><p className="mt-2 text-2xl font-semibold">{mockAnalysisPayload.kpis.co2Emissions}</p></Card>
        <Card><p className="text-sm text-slate-300">Portfolio ROI</p><p className="mt-2 text-2xl font-semibold">{mockAnalysisPayload.kpis.portfolioRoi}</p></Card>
      </section>
      <ChartsPanel data={mockAnalysisPayload.energyData} />
    </div>
  );
}
