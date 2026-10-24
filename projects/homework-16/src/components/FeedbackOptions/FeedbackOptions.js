import './FeedbackOptions.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedback-options">
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={`feedback-button feedback-${option}`}
          onClick={() => onLeaveFeedback(option)}
        >
          {option === 'good' && '👍 '}
          {option === 'neutral' && '😐 '}
          {option === 'bad' && '👎 '}

          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;