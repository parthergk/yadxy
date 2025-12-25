// import { cronJobs } from "./AutomationService";
// import { Student, User } from "@repo/db";
// import { getTodayDate } from "../utils/dateUtils";

// export async function runGenerateMonthlyFees() {
//   await cronJobs.generateMonthlyFees();
// }

// export async function runSendFeeReminders() {
//   await cronJobs.sendsendFeeReminders();
// }

// export async function runPlanDowngrade() {
//   console.log("plan downgrader");

//   const now = getTodayDate();
//   const teachers = await User.find({
//     planType: "pro",
//     planExpiresAt: { $lt: now },
//   });

//   for (const teacher of teachers) {
//     teacher.planStatus = "expired";
//     teacher.isPremiumActive = false;

//     const students = await Student.find({
//       teacherId: teacher.id,
//     });

//     for (const student of students) {
//       student.stopReminder = true;
//     }

//     await teacher.save();
//   }
// }
