const AnalysisDashboard = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="glass-panel animate-fade-in">
      <h2 style={{ color: 'var(--danger)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span>⚠️</span> Behavior Analysis
      </h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Detected Unhealthy Choices</h4>
        {analysis.unhealthyChoicesDetected && analysis.unhealthyChoicesDetected.length > 0 ? (
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
            {analysis.unhealthyChoicesDetected.map((choice, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{choice}</li>
            ))}
          </ul>
        ) : (
          <p>No major unhealthy choices detected in your recent input. Great job!</p>
        )}
      </div>

      <div style={{ background: 'rgba(255, 75, 75, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--danger)' }}>
        <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Contextual Triggers</h4>
        <p style={{ color: 'var(--text-main)', margin: 0 }}>{analysis.contextualFactors}</p>
      </div>
    </div>
  );
};

export default AnalysisDashboard;
