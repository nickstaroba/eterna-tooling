import "./Button.style.scss";

export const Button = ({ label }) => {
  const button = document.createElement("button");
  button.className = "button";
  button.type = "button";
  button.innerHTML = label;
  return button;
};
