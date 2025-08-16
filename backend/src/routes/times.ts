import { Router } from "express";
import { findOverlap } from "../utils/overlap";
import { Availability } from "../types";

const router = Router();

router.post("/suggest", (req, res) => {
  const avails: Availability[] = req.body.availabilities;

  try {
    const result = findOverlap(avails);
    res.json({ success: true, overlap: result });
  } catch (err) {
    res.status(400).json({ success: false, error: (err as Error).message });
  }
});

export default router;
