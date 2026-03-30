import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = getCurrentUserFromRequest(request);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const result = await prisma.analysisResult.findFirst({ where: { id, userId: auth.userId } });
  if (!result) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ result });
}
