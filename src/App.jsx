import { useState } from 'react';
import './App.css'; // Just keeping the import if we need component-specific styles later, but we use index.css mostly
import InputForm from './components/InputForm';
import AnalysisDashboard from './components/AnalysisDashboard';
import RecommendationCard from './components/RecommendationCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch recommendation');
      }
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while fetching the recommendation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header animate-fade-in">
        <h1>NutriSync AI</h1>
        <p>Your intelligent, context-aware food and health companion.</p>
      </header>

      <main>
        <div className="grid">
          <div className="form-section animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <InputForm onSubmit={handleFormSubmit} loading={loading} />
          </div>

          <div className="results-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {error && (
              <div className="glass-panel" style={{ borderColor: 'var(--danger)' }}>
                <h3 style={{ color: 'var(--danger)' }}>Error</h3>
                <p>{error}</p>
              </div>
            )}

            {!result && !loading && !error && (
              <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem' }}>
                <span style={{ fontSize: '3rem' }}>🥗</span>
                <h3>Ready to Analyze</h3>
                <p>Fill out the form to get your personalized health recommendation.</p>
              </div>
            )}

            {loading && (
              <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem' }}>
                <div className="loader"></div>
                <p style={{ marginTop: '1rem', color: 'var(--accent-secondary)' }}>Analyzing your context and generating recommendations...</p>
              </div>
            )}

            {result && !loading && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <AnalysisDashboard analysis={result.analysis} />
                <RecommendationCard 
                  recommendation={result.recommendation} 
                  sustainableHabit={result.sustainableHabit} 
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
