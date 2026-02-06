import "./FriendButton.css";

export default function FriendButton({
  friends,
  currentFriend,
  isOpen,
  onToggle,
  onSelect,
}) {
  const current = friends.find((f) => f.id === currentFriend);

  return (
    <div className="friend-control">
      {!isOpen && (
        <button className="friend-circle" onClick={onToggle}>
          <img src={current.image} alt={current.name} />
        </button>
      )}

      {isOpen && (
        <div className="friend-pill-container">
          {/* LEFT — lista de amigos */}
          <div className="friend-list">
            {friends.map((friend) => (
              <button
                key={friend.id}
                className="friend-pill"
                onClick={() => onSelect(friend.id)}
              >
                <img src={friend.image} alt={friend.name} />
              </button>
            ))}
          </div>

          {/* DIVIDER */}
          <div className="friend-divider" />

          {/* RIGHT — amigo atual */}
          <div className="friend-current">
            <img src={current.image} alt={current.name} />
          </div>
        </div>
      )}
    </div>
  );
}
