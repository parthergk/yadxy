import { NextFunction, Request, Response } from "express";
import { getToken } from "next-auth/jwt";
import { jwtDecrypt } from "jose";

export async function verifyJwt(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const raw = req.headers.cookie;
    const match = raw.match(/__Secure-next-auth\.session-token=([^;]+)/);

    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

    const { payload } = await jwtDecrypt(match[1], secret);
    console.log("DECRYPTED PAYLOAD", payload);

    const token = await getToken({
      req: { cookies: req.cookies, headers: req.headers } as any,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      res.status(401).json({ success: false, error: "Not authenticated" });
      return;
    }

    req.user = {
      id: token.id as string,
      email: token.email as string,
      plan: token.plan as string,
    };

    next();
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(401).json({ success: false, error: "Invalid token" });
  }
}
