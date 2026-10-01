function Profile(user) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="avatar"
        />

        <h1 className="name">{user.username}</h1>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="profile-stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>

        <li>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>

        <li>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;