import express from "express";
import {
  uploadAndDistribute,
  listByAgent,
  getDistributedListsGrouped
} from "../controllers/list.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

/* ────────────  LISTS  ──────────── */
router.post(
  "/",
  protectRoute,
  upload,               // multer file filter (.csv/.xlsx/.xls)
  uploadAndDistribute   // parse + distribute
); // POST /api/lists

router.get("/", protectRoute, listByAgent);  // GET /api/lists
router.get("/grouped", protectRoute, getDistributedListsGrouped);
export default router;
