import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_COOKIE = "enerlytics_token";
const maxAge = 60 * 60 * 24 * 7;

type AuthPayload = { userId: string; email: string };

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  return secret;
}

export function signToken(payload: AuthPayload) {
  return jwt.sign(payload, getSecret(), { expiresIn: maxAge });
}

export function verifyToken(token: string): AuthPayload {
  return jwt.verify(token, getSecret()) as AuthPayload;
}

export async function getCurrentUserFromCookie() {
  const token = (await cookies()).get(JWT_COOKIE)?.value;
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

export function getCurrentUserFromRequest(request: NextRequest) {
  const token = request.cookies.get(JWT_COOKIE)?.value;
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

export const authCookie = {
  name: JWT_COOKIE,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge
  }
};
