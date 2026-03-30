import { roadmap } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";

export function RoadmapTimeline() {
  return (
    <Card>
      <h3 className="mb-6 font-semibold">Roadmap to 2030</h3>
      <div className="space-y-4">
        {roadmap.map((milestone, idx) => (
          <div key={milestone.year} className="relative pl-8">
            <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-cyan-300" />
            {idx < roadmap.length - 1 && <span className="absolute left-[5px] top-5 h-10 w-px bg-white/20" />}
            <p className="text-sm text-cyan-200">{milestone.year}</p>
            <p className="font-medium">{milestone.title}</p>
            <p className="text-sm text-slate-300">{milestone.detail}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
