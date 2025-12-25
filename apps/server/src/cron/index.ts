import cron from "node-cron";
// import { cronJobs } from "./AutomationService";
import { Plan, Student, User } from "@repo/db";
import { getTodayDate } from "../utils/dateUtils";

// cron.schedule("04 21 * * *", cronJobs.generateMonthlyFees, {
//   timezone: "Asia/Kolkata",
// });

// cron.schedule("05 21 * * *", cronJobs.sendsendFeeReminders, {
//   timezone: "Asia/Kolkata",
// });

cron.schedule(
  "26 16 * * *",
  async () => {
    console.log("plan downgrader");

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

    const FREE_PLAN_ID = await Plan.findOne({ code: "free" });
    await User.updateMany(
      {
        "plan.subscription.status": "ACTIVE",
        "plan.subscription.endsAt": { $lt: new Date() },
      },
      {
        $set: {
          "plan.subscription.status": "EXPIRED",
          "plan.currentPlanId": FREE_PLAN_ID,
        },
      }
    );

    //     await teacher.save();
    //     // sendEmail(user.email, "Your Yadxy plan has expired...");
    //   }
  },{});
