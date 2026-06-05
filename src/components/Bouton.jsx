const Bouton = ({
  content,
  icon: Icon,
  onClick,
  width,
  textSize = "text-base"
}) => {
  return (
    <button
      onClick={onClick}
      className={`bouton ${textSize}`}
      style={{ width }}
    >
      <span>{content}</span>
      {Icon && <Icon size={25} />}
    </button>
  );
};

export default Bouton;