import { NextFunction, Request, Response } from "express";
import { decode } from "next-auth/jwt";
// import jwt from "jsonwebtoken";

export async function verifyJwt(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // const token = await getToken({
    //   req: { headers: { cookie: req.headers.cookie } } as any,
    //   secret: process.env.NEXTAUTH_SECRET,
    //   secureCookie: true
    // });
    const token =
      req.cookies["__Secure-next-auth.session-token"] ||
      req.cookies["next-auth.session-token"]; // dev fallback

    if (!token) {
      res.status(401).json({ message: "Not authenticated" });
      return;
    }

    const decoded = await decode({
      token,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    if (!decoded) {
      res.status(401).json({ success: false, error: "Not authenticated" });
      return;
    }

    req.user = {
      id: decoded.id as string,
      email: decoded.email as string,
      plan: decoded.plan as string,
    };

    next();
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(401).json({ success: false, error: "Invalid token" });
  }
}
