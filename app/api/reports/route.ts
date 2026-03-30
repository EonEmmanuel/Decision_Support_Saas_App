import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUserFromCookie } from "@/lib/auth";

const schema = z.object({ type: z.enum(["pdf", "ppt"]), analysisId: z.string().optional() });

export async function POST(request: Request) {
  const auth = await getCurrentUserFromCookie();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { type } = schema.parse(await request.json());
    return NextResponse.json({
      ok: true,
      message: `${type.toUpperCase()} export queued (mock).`
    });
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
