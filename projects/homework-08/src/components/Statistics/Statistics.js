function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const maxValue = Math.max(good, neutral, bad, 1);

  return (
    <div className="statistics">
      <div className="chart">
        <div className="chart-item">
          <div
            className="bar good-bar"
            style={{ height: `${(good / maxValue) * 150}px` }}
          ></div>
          <span>Good: {good}</span>
        </div>

        <div className="chart-item">
          <div
            className="bar neutral-bar"
            style={{ height: `${(neutral / maxValue) * 150}px` }}
          ></div>
          <span>Neutral: {neutral}</span>
        </div>

        <div className="chart-item">
          <div
            className="bar bad-bar"
            style={{ height: `${(bad / maxValue) * 150}px` }}
          ></div>
          <span>Bad: {bad}</span>
        </div>
      </div>

      <div className="summary">
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
}

export default Statistics;