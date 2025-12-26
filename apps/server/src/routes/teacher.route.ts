import { User, Plan } from "@repo/db";
import { Request, Response, Router } from "express";
import { verifyJwt } from "../middleware/verifyJwt";
import { getTodayDate } from "../utils/dateUtils";

const teacherRouter: Router = Router();

teacherRouter.get("/", verifyJwt, async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const now = getTodayDate();

    const user = await User.findById(userId)
      .select("name email phone tuitionClassName plan")
      .populate("plan.currentPlanId")
      .lean();

    if (!user) {
      res.status(404).json({
        success: false,
        message: "Teacher not found.",
      });
      return;
    }

    const freePlan = user.plan.currentPlanId as any;
    const proPlan = await Plan.findOne({ code: "pro", isActive: true }).lean();

    let effectivePlan = freePlan;
    let type: "FREE" | "TRIAL" | "PAID" = "FREE";
    let activatedAt: Date | null = null;
    let expiresAt: Date | null = null;

    if (
      user.plan.subscription.status === "ACTIVE" &&
      user.plan.subscription.startedAt &&
      user.plan.subscription.endsAt
    ) {
      effectivePlan = proPlan;
      activatedAt = user.plan.subscription.startedAt;
      expiresAt = user.plan.subscription.endsAt;
      type = "PAID"
    } else if (
      user.plan.trial.status === "active" &&
      user.plan.trial?.startedAt && user.plan.trial.endsAt &&
      user.plan.trial.endsAt > now
    ) {
      effectivePlan = proPlan
      activatedAt = user.plan.trial.startedAt
      expiresAt = user.plan.trial.endsAt
      type = "TRIAL"
    }

    res.status(200).json({
      success: true,
      message: "Teacher profile fetched successfully.",
      data: {
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          tuitionClassName: user.tuitionClassName,
        },
        plan: {
          title: type === "TRIAL" ? `${effectivePlan.title} (Trial)` : effectivePlan.title,
          price: effectivePlan.price,
          studentLimit: effectivePlan.studentLimit,
          activatedAt,
          expiresAt,
        },
      },
    });
    return;
  } catch (error) {
    console.error("Teacher profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch profile. Please try again later.",
    });
    return;
  }
});

export default teacherRouter;
