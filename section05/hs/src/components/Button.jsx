const Button = ({ text, color = "black" }) => {
  return (
    <button
      onClick={() => {
        console.log(text);
      }}
      style={{ color: color }}
    >
      {text}-{color}
    </button>
  );
};

export default Button;
