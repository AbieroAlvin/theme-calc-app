const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`w-full rounded-md px-0 pb-1 shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
