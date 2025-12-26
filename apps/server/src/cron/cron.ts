import { cronJobs } from "./AutomationService";
import { Student, User } from "@repo/db";
import { getTodayDate } from "../utils/dateUtils";

export async function runGenerateMonthlyFees() {
  await cronJobs.generateMonthlyFees();
}

export async function runSendFeeReminders() {
  await cronJobs.sendsendFeeReminders();
}

export async function runPlanDowngrade() {
  console.log("[CRON] Plan downgrade started");

  const now = getTodayDate();

  const teachers = await User.find({
    $or: [
      { "plan.trial.status": "active" },
      { "plan.subscription.status": "ACTIVE" },
    ],
  });

  for (const teacher of teachers) {
    let hasChanged = false;

    if (
      teacher.plan.trial.status === "active" &&
      teacher.plan.trial.endsAt &&
      teacher.plan.trial.endsAt < now
    ) {
      teacher.plan.trial.status = "expired";
      hasChanged = true;
    }

    if (
      teacher.plan.subscription.status === "ACTIVE" &&
      teacher.plan.subscription.endsAt &&
      teacher.plan.subscription.endsAt < now
    ) {
      teacher.plan.subscription.status = "EXPIRED";
      hasChanged = true;
    }

    if (hasChanged) {
      await teacher.save();
    }
  }

  console.log("[CRON] Plan downgrade completed");
}

