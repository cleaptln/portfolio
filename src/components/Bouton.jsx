import React from "react";

const Bouton = ({
  content,
  icon: Icon,
  onClick,
  width
}) => {
  return (
    <button
      onClick={onClick}
      className="bouton"
      style={{ width }}
    >
      <span>{content}</span>
      {Icon && <Icon size={25} />}
    </button>
  );
};

export default Bouton;