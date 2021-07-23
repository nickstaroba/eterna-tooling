import "./Button.style.scss";

interface IButtonProps {
  label: string;
}

export const Button = ({ label }: IButtonProps): HTMLButtonElement => {
  const button = document.createElement("button");
  button.className = "button";
  button.type = "button";
  button.innerHTML = label;
  return button;
};
