import { NextFunction, Request, Response } from "express";
import { getToken } from "next-auth/jwt";

export async function verifyJwt(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    
    const token = await getToken({
      req: { headers: { cookie: req.headers.cookie } } as any,
      secret: process.env.NEXTAUTH_SECRET,
      secureCookie: true
    });
    console.log("token", token);

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
