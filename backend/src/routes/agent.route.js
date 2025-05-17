import express from "express";
import { createAgent, getAgents } from "../controllers/agent.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

/* ────────────  AGENTS  ──────────── */
router.post("/", protectRoute, createAgent); // POST /api/agents
router.get("/", protectRoute, getAgents);    // GET  /api/agents

export default router;
