import { Admin } from "@repo/db";
import { bcryptjs } from "@repo/auth";
import { Router } from "express";
import jwt from "jsonwebtoken";

const loginRouter: Router = Router();

loginRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
      return;
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
      return;
    }

    const isValid = await bcryptjs.compare(password, admin.password);

    if (!isValid) {
      res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
      return;
    }

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        role: "admin",
      },
      process.env.ADMIN_JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default loginRouter;
