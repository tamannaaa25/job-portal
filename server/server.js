import "./config/instrument.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from "./routes/companyRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectCloudinary from "./config/cloudinary.js";

dotenv.config();

const app = express();

const startServer = async () => {
  try {
    // 🔗 Connect DB & Cloudinary
    await connectDB();
    await connectCloudinary();

    // ================= MIDDLEWARE =================
    app.use(express.json());

    // ⭐ REQUIRED FOR multipart/form-data (VERY IMPORTANT)
    app.use(express.urlencoded({ extended: true }));

    app.use(
      cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
      })
    );

    // ================= ROUTES =================
    app.use("/api/company", companyRoutes);
    app.use("/api/jobs", jobRoutes);
    app.use("/api/users", userRoutes);

    // Clerk Webhooks
    app.post("/webhooks", clerkWebhooks);

    // Health Check
    app.get("/", (req, res) => {
      res.send("🚀 Job Portal Backend Running");
    });

    // ================= ERROR HANDLING =================
    Sentry.setupExpressErrorHandler(app);

    // ================= SERVER =================
    const PORT = process.env.PORT || 5001; // 5001 avoids macOS conflicts
    app.listen(PORT, () =>
      console.log(`✅ Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
};

startServer();
