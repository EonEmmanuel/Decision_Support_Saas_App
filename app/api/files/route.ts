import { NextResponse } from "next/server";
import { getCurrentUserFromCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const auth = await getCurrentUserFromCookie();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const files = await prisma.file.findMany({ where: { userId: auth.userId }, orderBy: { createdAt: "desc" } });
  return NextResponse.json({ files });
}
