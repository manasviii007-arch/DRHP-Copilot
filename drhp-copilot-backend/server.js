/**
 * DRHP Copilot - Backend API Server
 * Handles secure Gemini AI integrations, token management, and custom drafts.
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ================= MIDDLEWARES =================
app.use(helmet());
app.use(morgan('dev'));

// Configure CORS to connect securely with your Vite Frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

app.use(express.json());

// ================= API ENDPOINTS =================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Friendly GET handler to prevent 404s when testing in the browser
app.get('/api/draft', (req, res) => {
  res.status(200).json({
    message: "Objects of the Issue Drafting endpoint is active!",
    instructions: "This route expects an HTTP POST request containing your drafting criteria.",
    examplePayload: {
      prompt: "Draft Objects of the issue explaining that our Company aggregate fund requirement matches ₹24.50 Crores...",
      objectsCapital: 24.5
    }
  });
});

// AI Draft Endpoint
app.post('/api/draft', async (req, res) => {
  const { prompt, objectsCapital } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // If no key is set, return a high-fidelity mock draft
    return res.status(200).json({
      col1: `Our Company was originally incorporated as 'TechFlow Solutions Private Limited' on May 12, 2018. Following SEBI rules, the aggregate fund requirement for the Objects of the Issue is projected at ₹${parseFloat(objectsCapital || 24.50).toFixed(2)} Crores, with a designated capital budget of ₹18.00 Crores allocated for infrastructure.`,
      col2: `The remaining surplus from public funds will be deployed for general corporate purposes (GCP), strictly adhering to guidelines. As stated by auditors, our top 3 clients account for 42.1% of our revenue.`
    });
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const systemPrompt = "You are a regulatory compliance officer specializing in SEBI ICDR guidelines. Prepare a concise Section V: Objects of the Issue draft based strictly on the user directives. You must write EXACTLY two parts, separated by the string '|||'. Keep it highly formal and appropriate for a Draft Red Herring Prospectus.";
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Prompt: "${prompt}". Include metrics: capital target "projected at ₹${parseFloat(objectsCapital).toFixed(2)} Crores" and "top 3 clients account for 42.1% of our revenue".` }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      })
    });

    if (!response.ok) throw new Error("Gemini API request failed.");

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    let col1 = "";
    let col2 = "";

    if (generatedText.includes("|||")) {
      const parts = generatedText.split("|||");
      col1 = parts[0].trim();
      col2 = parts[1].trim();
    } else {
      col1 = generatedText.substring(0, Math.floor(generatedText.length / 2)).trim();
      col2 = generatedText.substring(Math.floor(generatedText.length / 2)).trim();
    }

    res.status(200).json({ col1, col2 });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`[DRHP Backend] Server listening securely on port ${PORT}`);
});