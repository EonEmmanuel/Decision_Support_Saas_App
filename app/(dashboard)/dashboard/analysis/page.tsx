import { RoadmapTimeline } from "@/components/dashboard/roadmap-timeline";
import { Card } from "@/components/ui/card";
import { recommendations } from "@/lib/mock-data";

export default function AnalysisPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {["Paris HQ", "Berlin Office", "Lyon Asset"].map((asset) => (
          <Card key={asset}>
            <p className="text-sm text-slate-300">Building</p>
            <p className="text-xl font-semibold">{asset}</p>
            <p className="text-sm text-emerald-300">Performance uplift +12% to +18%</p>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">Prioritized recommendations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-400">
              <tr>
                <th className="py-2">ID</th><th>Action</th><th>CAPEX</th><th>ROI</th><th>CO2</th><th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec) => (
                <tr key={rec.id} className="border-t border-white/10">
                  <td className="py-2">{rec.id}</td><td>{rec.action}</td><td>{rec.capex}</td><td>{rec.roi}</td><td>{rec.co2}</td><td>{rec.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <RoadmapTimeline />
    </div>
  );
}
