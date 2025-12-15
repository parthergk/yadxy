import cron from "node-cron";
import { cronJobs } from "./AutomationService";
import { Student, User } from "@repo/db";
import { getTodayDate } from "../utils/dateUtils";

// cron.schedule("51 17 * * *", cronJobs.generateMonthlyFees, {
//   timezone: "Asia/Kolkata",
// });

// cron.schedule("52 17 * * *", cronJobs.sendsendFeeReminders, {
//   timezone: "Asia/Kolkata",
// });

// cron.schedule("26 16 * * *", async () => {
//   console.log("plan downgrader");
  
//   const now = getTodayDate();
//   const teachers = await User.find({
//     planType: "pro",
//     planExpiresAt: {$lt:now}
//   });

//   for(const teacher of teachers){
//     teacher.planStatus = "expired";
//     teacher.isPremiumActive = false;

//     const students = await Student.find({
//       teacherId: teacher.id
//     });

//     for(const student of students){
//       student.stopReminder = true;
//     };
    
//     await teacher.save();
//     // sendEmail(user.email, "Your Yadxy plan has expired...");
//   }
// }, {});
