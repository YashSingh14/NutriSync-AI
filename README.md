# NutriSync AI 🥗

An AI-powered food and health recommendation web app built with **React**, **Express**, and **Google Gemini AI**.

## 🌐 Live Demo
[https://nutrisync-ai-zpykikm2hq-uc.a.run.app](https://nutrisync-ai-zpykikm2hq-uc.a.run.app)

## ✨ Features
- **Context-Aware Recommendations** — Analyzes your lifestyle, budget, stress, schedule, and cravings
- **Behavior Analysis** — Detects unhealthy food choices and explains contextual triggers
- **Healthier Alternatives** — Suggests similar foods that preserve taste, affordability, and convenience
- **Sustainable Habits** — Provides one achievable habit improvement per session
- **Dark Mode UI** — Premium glassmorphism design with smooth micro-animations

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite |
| Backend | Express 5 (Node.js) |
| AI | Google Gemini API (`@google/genai`) |
| Styling | Vanilla CSS (Dark Mode, Glassmorphism) |
| Deployment | Google Cloud Run |

## 🚀 Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/YashSingh14/NutriSync-AI.git
cd NutriSync-AI
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start the development server
```bash
npm run dev
```
This starts both the Vite frontend (`http://localhost:5173`) and the Express backend (`http://localhost:3001`) concurrently.

## ☁️ Deploying to Cloud Run
```bash
gcloud run deploy nutrisync-ai \
  --source . \
  --region=us-central1 \
  --allow-unauthenticated \
  --set-env-vars=GEMINI_API_KEY=your_key_here
```

## 📁 Project Structure
```
├── src/
│   ├── components/
│   │   ├── InputForm.jsx         # User input collection
│   │   ├── AnalysisDashboard.jsx # Behavior analysis display
│   │   └── RecommendationCard.jsx# AI recommendation display
│   ├── App.jsx                   # Main layout
│   ├── App.css                   # Loader animation
│   └── index.css                 # Global dark mode theme
├── server.js                     # Express API + static file server
├── Dockerfile                    # Cloud Run container config
└── vite.config.js                # Vite + API proxy config
```
