import { Router } from "express";

const whatsappRoute: Router = Router();
const verifyToken = process.env.ACCESS_TOKEN;

whatsappRoute.get("/", (req, res) => {
  const {
    "hub.mode": mode,
    "hub.challenge": challenge,
    "hub.verify_token": token,
  } = req.query;

  if (mode === "subscribe" && token === verifyToken) {
    console.log("WEBHOOK VERIFIED");
    res.status(200).send(challenge);
  } else {
    res.status(403).end();
  }
});

export default whatsappRoute