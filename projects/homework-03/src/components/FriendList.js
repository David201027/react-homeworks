function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="friend-item">
          <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
          <h3 className="friend-name">{friend.name}</h3>
          <p className={`friend-status ${friend.isOnline ? 'online' : 'offline'}`}>
            {friend.isOnline ? 'Online' : 'Offline'}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;