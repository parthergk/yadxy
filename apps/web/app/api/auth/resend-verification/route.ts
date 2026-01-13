import { connectTodb, User } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../../../helpers/mail/sendEmail";

export async function POST(req: NextRequest) {
  const body = await req.json();
  await connectTodb();

  if (!body.email) {
    return NextResponse.json(
      {
        success: false,
        error: "Email is required",
      },
      { status: 400 }
    );
  }

  const user = await User.findOne({ email: body.email });
  if (!user) {
    return NextResponse.json(
      {
        success: false,
        error: "No user found with this email",
      },
      { status: 404 }
    );
  }

  try {
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "15m" }
    );

    user.set({
      isVerified: false,
    });
    await user.save();

    const verificationUrl = `${process.env.CLIENT_URL}/verify?token=${token}`;

    const emailResponse = await sendEmail({
      type: "register",
      email: user.email,
      url: verificationUrl,
    });

    if (!emailResponse.success) {
      return NextResponse.json({
        success: false,
        message: emailResponse.error,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "New Verification link sended",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error sending link:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
