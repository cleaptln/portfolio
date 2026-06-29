import { useRef } from "react";

const Card = ({ children, className = "", spotlightColor = "rgba(255,255,255,0.2)", ...props }) => {
  const divRef = useRef(null);
  const spotRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Direct DOM, zéro re-render React
    spotRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
  };

  const handleMouseEnter = () => { spotRef.current.style.opacity = '0.6'; };
  const handleMouseLeave = () => { spotRef.current.style.opacity = '0'; };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
      {...props}
    >
      <div
        ref={spotRef}
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
};

export default Card;
