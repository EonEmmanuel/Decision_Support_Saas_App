import { NextResponse } from "next/server";
import { roadmap, recommendations } from "@/lib/mock-data";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    resultId: params.id,
    status: "completed",
    parsedData: {
      assets: 84,
      countries: ["FR", "DE", "NL"]
    },
    recommendations,
    roadmap
  });
}
