function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}

      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id}>
            <span className="label">{item.label}: </span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;