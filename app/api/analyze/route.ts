import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUserFromCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { mockAnalysisPayload } from "@/lib/mock-data";

const schema = z.object({ fileId: z.string().min(1) });

export async function POST(request: Request) {
  const auth = await getCurrentUserFromCookie();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { fileId } = schema.parse(await request.json());
    const file = await prisma.file.findFirst({ where: { id: fileId, userId: auth.userId } });
    if (!file) return NextResponse.json({ error: "File not found" }, { status: 404 });

    await prisma.file.update({ where: { id: file.id }, data: { status: "processing" } });

    // Integration point for future Python microservice call (POST /process-excel).
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = await prisma.analysisResult.create({
      data: {
        status: "completed",
        buildingInfo: mockAnalysisPayload.buildingInfo,
        kpis: mockAnalysisPayload.kpis,
        energyData: mockAnalysisPayload.energyData,
        recommendations: mockAnalysisPayload.recommendations,
        roadmap: mockAnalysisPayload.roadmap,
        fileId: file.id,
        userId: auth.userId
      }
    });

    await prisma.file.update({ where: { id: file.id }, data: { status: "completed" } });

    return NextResponse.json({ analysisId: result.id, status: result.status });
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
