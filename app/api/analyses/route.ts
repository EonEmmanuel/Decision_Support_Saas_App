import { NextResponse } from "next/server";
import { getCurrentUserFromCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const auth = await getCurrentUserFromCookie();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const analyses = await prisma.analysisResult.findMany({
    where: { userId: auth.userId },
    select: { id: true, status: true, createdAt: true, file: { select: { originalName: true } } },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json({ analyses });
}
