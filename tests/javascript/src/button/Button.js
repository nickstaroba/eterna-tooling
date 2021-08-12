import "./Button.scss";

export const Button = ({ label }) => {
  const button = document.createElement("button");
  button.className = "Button";
  button.type = "button";
  button.innerHTML = label;
  return button;
};
