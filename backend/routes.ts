import { Router } from "express";

const router = Router();

router.get("/assessments", (req, res) => {
  res.json([
    { id: "1", title: "Cognitive Ability Test", duration: "45m" },
    { id: "2", title: "Software Engineering Skills", duration: "60m" },
    { id: "3", title: "Cultural Fit Assessment", duration: "30m" }
  ]);
});

export default router;
