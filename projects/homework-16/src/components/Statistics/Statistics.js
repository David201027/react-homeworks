import './Statistics.css';

function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className="statistics">
      <div className="stat-row">
        <span>Good</span>
        <strong>{good}</strong>
      </div>

      <div className="stat-row">
        <span>Neutral</span>
        <strong>{neutral}</strong>
      </div>

      <div className="stat-row">
        <span>Bad</span>
        <strong>{bad}</strong>
      </div>

      <div className="stat-divider" />

      <div className="stat-row">
        <span>Total</span>
        <strong>{total}</strong>
      </div>

      <div className="stat-row positive-row">
        <span>Positive feedback</span>
        <strong>{positivePercentage}%</strong>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${positivePercentage}%` }}
        />
      </div>
    </div>
  );
}

export default Statistics;