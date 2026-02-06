import "./FriendCard.css";

export default function FriendCard({
  name,
  type,
  image,
  imageCard,
  selected,
  disabled,
  onSelect,
}) {
  return (
    <button
      className={`friend-card 
        ${selected ? "selected" : ""} 
        ${disabled ? "disabled" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      disabled={disabled}
    >
      <div className="friend-header">
        <h3>{name}</h3>
        <span>{type}</span>
      </div>

      <div className="friend-content">
        <img className="friend-image" src={image} alt={name} />

        {type === "Texto" ? (
          <div className="friend-text-wrapper">
            <p className="friend-text-card">Viajar com este amigo</p>
          </div>
        ) : (
          <img
            className="friend-card-info"
            src={imageCard}
            alt={`${name} card`}
          />
        )}
      </div>
    </button>
  );
}
