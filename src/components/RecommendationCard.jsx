const RecommendationCard = ({ recommendation, sustainableHabit }) => {
  if (!recommendation) return null;

  return (
    <div className="glass-panel animate-fade-in" style={{ animationDelay: '0.1s', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative gradient orb */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'var(--accent-gradient)',
        filter: 'blur(50px)',
        opacity: 0.5,
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ color: 'var(--success)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>✨</span> Healthier Alternative
        </h2>
        <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1rem' }}>{recommendation.name}</h3>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          "{recommendation.whyHealthier}"
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', marginBottom: '0.25rem' }}>👅 Taste</div>
            <div style={{ fontSize: '0.9rem' }}>{recommendation.preservedFactors.taste}</div>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--success)', fontWeight: 'bold', marginBottom: '0.25rem' }}>💰 Affordability</div>
            <div style={{ fontSize: '0.9rem' }}>{recommendation.preservedFactors.affordability}</div>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--accent-primary)', fontWeight: 'bold', marginBottom: '0.25rem' }}>⏱️ Convenience</div>
            <div style={{ fontSize: '0.9rem' }}>{recommendation.preservedFactors.convenience}</div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(to right, rgba(138, 43, 226, 0.2), rgba(0, 210, 255, 0.2))', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--accent-primary)' }}>
          <h4 style={{ color: 'white', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🌱</span> Sustainable Habit to Try
          </h4>
          <p style={{ color: 'var(--text-main)', margin: 0 }}>{sustainableHabit}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
