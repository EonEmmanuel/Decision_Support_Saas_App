import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    integration: "python-service-placeholder",
    endpoint: "POST /process-excel",
    message: "Future integration point: call external Python processing service here.",
    mock: true
  });
}
