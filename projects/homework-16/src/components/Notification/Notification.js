import './Notification.css';

function Notification({ message }) {
  return (
    <div className="notification">
      <span className="notification-icon">📋</span>
      <p>{message}</p>
    </div>
  );
}

export default Notification;