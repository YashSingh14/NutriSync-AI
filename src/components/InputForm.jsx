import { useState } from 'react';

const InputForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    lifestyle: '',
    budget: '',
    cravings: '',
    stress: '',
    schedule: '',
    currentFoods: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="glass-panel">
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Your Context</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="lifestyle" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            Lifestyle / Dietary Preference
          </label>
          <select id="lifestyle" name="lifestyle" value={formData.lifestyle} onChange={handleChange} required>
            <option value="" disabled>Select your lifestyle</option>
            <option value="sedentary">Sedentary (Desk Job)</option>
            <option value="active">Active (Workout 3+ times/week)</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
            <option value="balanced">Balanced / No restrictions</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="budget" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            Budget
          </label>
          <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required>
            <option value="" disabled>Select your budget</option>
            <option value="low">Tight Budget</option>
            <option value="medium">Moderate</option>
            <option value="high">Flexible</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="schedule" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            Schedule / Time to Cook
          </label>
          <select id="schedule" name="schedule" value={formData.schedule} onChange={handleChange} required>
            <option value="" disabled>Select available time</option>
            <option value="minimal">Minimal (&lt; 15 mins)</option>
            <option value="moderate">Moderate (15-30 mins)</option>
            <option value="plenty">Plenty (&gt; 30 mins)</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="stress" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            Current Stress Level: <strong style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>{formData.stress || 5}</strong> / 10
          </label>
          <input 
            type="range" 
            id="stress" 
            name="stress" 
            min="1" max="10" 
            value={formData.stress || 5} 
            onChange={handleChange} 
            style={{ accentColor: 'var(--accent-primary)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Low (1)</span>
            <span>High (10)</span>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="cravings" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            What are you craving?
          </label>
          <input 
            type="text" 
            id="cravings" 
            name="cravings" 
            placeholder="e.g., something sweet, crunchy, salty..." 
            value={formData.cravings} 
            onChange={handleChange} 
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="currentFoods" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            Recent / Typical Food Choices
          </label>
          <textarea 
            id="currentFoods" 
            name="currentFoods" 
            rows="3"
            placeholder="e.g., I had a bag of chips and a soda for lunch..." 
            value={formData.currentFoods} 
            onChange={handleChange} 
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Get Recommendation'}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
