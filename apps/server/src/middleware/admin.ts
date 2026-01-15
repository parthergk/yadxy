import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({
        success: false,
        error: "Authorization token missing",
      });
      return;
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    if (!token) {
      res.status(401).json({
        success: false,
        error: "Invalid authorization format",
      });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.ADMN_JWT_SECRET!
    ) as JwtPayload;

    if (!decoded) {
      res.status(401).json({
        success: false,
        error: "Invalid token",
      });
      return;
    }

    next();
  } catch (error: any) {
    console.error("Admin auth error:", error);

    res.status(401).json({
      success: false,
      error:
        error?.name === "TokenExpiredError"
          ? "Token expired"
          : "Unauthorized access",
    });
    return;
  }
};

export default adminMiddleware;
