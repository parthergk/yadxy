import { cronJobs } from "./AutomationService";
import { Plan, User } from "@repo/db";
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

  await User.updateMany(
    {
      "plan.trial.status": "active",
      "plan.trial.endsAt": { $lt: now },
    },
    {
      $set: { "plan.trial.status": "expired" },
    }
  );

  const freePlan = await Plan.findOne({
    code: "free",
    isActive: true,
  }).select("_id");

  await User.updateMany(
    {
      "plan.subscription.status": "ACTIVE",
      "plan.subscription.endsAt": { $lt: now },
    },
    {
      $set: {
        "plan.subscription.status": "EXPIRED",
        "plan.currentPlanId": freePlan,
      },
    }
  );
  console.log("[✅] Plan downgrade cron executed successfully");
}
