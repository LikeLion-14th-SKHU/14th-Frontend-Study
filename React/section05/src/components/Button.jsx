const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color: color.toUpperCase() }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
