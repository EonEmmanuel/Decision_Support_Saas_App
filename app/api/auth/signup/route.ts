import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authCookie, signToken } from "@/lib/auth";

const schema = z.object({ email: z.string().email(), password: z.string().min(8) });

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());
    const existing = await prisma.user.findUnique({ where: { email: body.email.toLowerCase() } });
    if (existing) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

    const user = await prisma.user.create({
      data: { email: body.email.toLowerCase(), password: await bcrypt.hash(body.password, 10) }
    });

    const token = signToken({ userId: user.id, email: user.email });
    const res = NextResponse.json({ user: { id: user.id, email: user.email } }, { status: 201 });
    res.cookies.set(authCookie.name, token, authCookie.options);
    return res;
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
