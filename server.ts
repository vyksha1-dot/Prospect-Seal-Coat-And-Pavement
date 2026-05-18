import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize Resend
  let resend: Resend | null = null;
  const getResend = () => {
    if (!resend && process.env.RESEND_API_KEY) {
      resend = new Resend(process.env.RESEND_API_KEY);
    }
    return resend;
  };

  // API Route for Quote Submissions
  app.post("/api/quote", async (req, res) => {
    const { name, phone, email, service, message } = req.body;
    
    console.log("New Quote Request Received:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);

    const resendClient = getResend();
    if (resendClient) {
      try {
        await resendClient.emails.send({
          from: 'Prospect Seal Coat <onboarding@resend.dev>',
          to: 'vyksha1@gmail.com', // User's email from metadata
          subject: 'New Quote Request: Prospect Seal Coat',
          html: `
            <h1>New Lead Received</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
          `
        });
        console.log("Notification email sent successfully");
      } catch (error) {
        console.error("Failed to send notification email:", error);
      }
    } else {
      console.warn("RESEND_API_KEY not found. Skipping email notification.");
    }

    res.json({ success: true, message: "Quote request received successfully" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
