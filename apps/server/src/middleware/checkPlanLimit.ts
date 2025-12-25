import { Plan, Student, User } from "@repo/db";
import { NextFunction, Request, Response } from "express";
import { getTodayDate } from "../utils/dateUtils";

async function checkPlanLimit(req: Request, res: Response, next: NextFunction) {
  const userId = req.user?.id;

  if (!userId) {
     res.status(401).json({
      error: "User not authenticated"
    });
    return;
  }

  try {
    
    const user = await User.findById(userId).populate("plan.currentPlanId").lean();

    if (!user) {
       res.status(404).json({
        error: "Teacher not found"
      });
      return;
    }

     const now = getTodayDate();

    let effectivePlan = user.plan.currentPlanId as any;

    if (user.plan.trial.status==="active" && user.plan.trial.endsAt && user.plan.trial.endsAt > now) {
     effectivePlan = await Plan.findOne({code: "pro", isActive: true}).lean() 
    }

    if (effectivePlan.studentLimit === null || effectivePlan.studentLimit === undefined) {
      return next();
    }
    
    const studentCount = await Student.countDocuments({ teacherId: userId });

    if (studentCount >= effectivePlan.studentLimit) {
       res.status(403).json({
        error: `You have reached your plan limit (${effectivePlan.studentLimit} students). Upgrade your plan to add more students.`,
        currentStudents: studentCount,
        maxStudents: effectivePlan.studentLimit
      });
      return;
    }

    next();
    
  } catch (error) {
    console.error("Error in checkPlanLimit middleware:", error);
     res.status(500).json({
      error: "Failed to check plan limit"
    });
    return;
  }
}

export { checkPlanLimit };