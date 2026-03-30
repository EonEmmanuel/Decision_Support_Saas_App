import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    integration: "python-service-placeholder",
    endpoint: "POST /process-excel",
    parsedData: [{ asset: "Paris HQ", energy: 420, co2: 170 }],
    recommendations: [{ id: "REC-01", action: "Heat pump retrofit" }],
    roadmap: [{ year: 2027, milestone: "Retrofit wave 1" }]
  });
}
