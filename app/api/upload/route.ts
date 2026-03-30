import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "uploaded",
    fileId: "file_mock_123",
    message: "File accepted. Processing is mocked in frontend."
  });
}
