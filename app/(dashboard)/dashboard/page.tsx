import { ChartsPanel } from "@/components/dashboard/charts";
import { Card } from "@/components/ui/card";
import { kpis } from "@/lib/mock-data";

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <p className="text-sm text-slate-300">{kpi.label}</p>
            <p className="mt-2 text-2xl font-semibold">{kpi.value}</p>
            <p className="mt-1 text-xs text-emerald-300">{kpi.delta}</p>
          </Card>
        ))}
      </section>
      <ChartsPanel />
    </div>
  );
}
