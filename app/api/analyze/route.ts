import { NextResponse } from "next/server";
import { recommendations } from "@/lib/mock-data";

export async function POST() {
  return NextResponse.json({
    analysisId: "analysis_mock_001",
    status: "processing",
    recommendations
  });
}
