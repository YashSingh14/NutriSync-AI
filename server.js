/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the built React app
app.use(express.static(join(__dirname, 'dist')));

// Initialize Google Gen AI with the provided API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const modelName = 'gemini-flash-latest';

app.post('/api/recommend', async (req, res) => {
  try {
    const { 
      lifestyle, 
      budget, 
      cravings, 
      stress, 
      schedule, 
      currentFoods 
    } = req.body;

    const prompt = `
    You are an AI nutritionist and health coach. 
    Analyze the user's food habits and context and provide a healthy recommendation.
    User Profile:
    - Lifestyle/Diet: ${lifestyle}
    - Budget: ${budget}
    - Current Cravings: ${cravings}
    - Stress Level: ${stress}
    - Schedule/Time available: ${schedule}
    - Current/Recent Food Choices: ${currentFoods}

    Provide your analysis as a JSON object with the exact following structure:
    {
      "analysis": {
        "unhealthyChoicesDetected": ["list of unhealthy choices from the user's input"],
        "contextualFactors": "Brief explanation of how their stress, budget, or schedule is affecting their choices."
      },
      "recommendation": {
        "name": "Name of the healthy alternative food/meal",
        "whyHealthier": "Explanation of why this is better",
        "preservedFactors": {
          "taste": "How it satisfies their cravings",
          "affordability": "How it fits their budget",
          "convenience": "How it fits their schedule"
        }
      },
      "sustainableHabit": "One small, achievable habit improvement related to their inputs."
    }
    `;

    const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            temperature: 0.7,
        }
    });

    const responseText = response.text;
    res.json(JSON.parse(responseText));
  } catch (error) {
    console.error("Error generating recommendation:", error);
    res.status(500).json({
      error: "Failed to generate recommendation. Please try again.",
      details: error.message
    });
  }
});

// Catch-all: serve React app for any non-API route (SPA routing) - Express 5 syntax
app.get(/(.*)/, (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
