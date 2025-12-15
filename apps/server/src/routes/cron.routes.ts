import { Router } from "express";
import {
  runGenerateMonthlyFees,
  runSendFeeReminders,
  runPlanDowngrade,
} from "../cron/cron";

const cronRouter:Router = Router();

cronRouter.post("/run", async (req, res) => {
  const secret = req.headers["x-cron-secret"];

  if (secret !== process.env.CRON_SECRET) {
     res.status(401).json({ message: "Unauthorized" });
     return;
  }

  const { job } = req.body;

  try {
    if (job === "monthly-fees") await runGenerateMonthlyFees();
    if (job === "fee-reminder") await runSendFeeReminders();
    if (job === "plan-downgrade") await runPlanDowngrade();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cron failed" });
  }
});

export default cronRouter;
