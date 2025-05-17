import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import agentRoutes from "./routes/agent.route.js";
import listRoutes  from "./routes/list.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// auth routes
app.use("/api/auth", authRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/lists', listRoutes);

// simple test route
app.get("/api/test", (req, res) => {
  console.log("✅ /api/test hit");
  res.status(200).json({ ok: true, message: "Test route working" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
