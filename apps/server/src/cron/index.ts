import cron from "node-cron";
import { cronJobs } from "./AutomationService";
import { Plan, User } from "@repo/db";
import { getTodayDate } from "../utils/dateUtils";

cron.schedule("07 13 * * *", cronJobs.generateMonthlyFees, {
  timezone: "Asia/Kolkata",
});

cron.schedule("08 13 * * *", cronJobs.sendsendFeeReminders, {
  timezone: "Asia/Kolkata",
});

cron.schedule(
  "56 12 * * *",
  async () => {
    const now = getTodayDate();

    try {
      await User.updateMany(
        {
          "plan.trial.status": "active",
          "plan.trial.endsAt": { $lt: now },
        },
        {
          $set: { "plan.trial.status": "expired" },
        }
      );
    } catch (error) {
      console.log("error downgrade trail", error);
    }

    const freePlan = await Plan.findOne({
      code: "free",
      isActive: true,
    }).select("_id");

    try {      
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
    } catch (error) {
      console.log("error downgrade subscription", error);
    }

    console.log("[✅] Plan downgrade cron executed successfully");
    //     await teacher.save();
    //     // sendEmail(user.email, "Your Yadxy plan has expired...");
    //   }
  },
  {}
);