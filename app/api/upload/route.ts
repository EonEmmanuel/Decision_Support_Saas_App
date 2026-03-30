import { NextResponse } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { getCurrentUserFromCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const auth = await getCurrentUserFromCookie();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const form = await request.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const allowed = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/csv"];
  if (!allowed.includes(file.type)) {
    return NextResponse.json({ error: "Only Excel/CSV files are accepted" }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), "uploads");
  await mkdir(uploadDir, { recursive: true });

  const ext = path.extname(file.name) || ".xlsx";
  const storedName = `${Date.now()}-${randomUUID()}${ext}`;
  const targetPath = path.join(uploadDir, storedName);
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(targetPath, bytes);

  const saved = await prisma.file.create({
    data: {
      originalName: file.name,
      storedName,
      mimeType: file.type,
      size: file.size,
      status: "uploaded",
      userId: auth.userId
    }
  });

  return NextResponse.json({ file: saved }, { status: 201 });
}
