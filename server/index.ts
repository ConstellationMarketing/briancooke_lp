import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

interface ConsultationData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Consultation form endpoint
  app.post("/api/consultation", async (req, res) => {
    try {
      const data: ConsultationData = req.body;

      // Validate required fields
      if (!data.name || !data.email || !data.phone || !data.message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Get Zapier webhook URL from environment variable
      const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

      if (!zapierWebhookUrl) {
        console.error("ZAPIER_WEBHOOK_URL not configured");
        return res.status(500).json({ error: "Configuration error" });
      }

      // Send to Zapier
      const zapierResponse = await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!zapierResponse.ok) {
        console.error("Zapier request failed:", await zapierResponse.text());
        return res.status(500).json({ error: "Failed to process request" });
      }

      return res.status(200).json({
        success: true,
        message: "Consultation request received",
      });
    } catch (error) {
      console.error("Error processing consultation form:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return app;
}
