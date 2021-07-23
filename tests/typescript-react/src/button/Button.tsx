import "./Button.style.scss";

import React, { FC } from "react";

interface IButtonProps {
  label: string;
}

export const Button: FC<IButtonProps> = ({ label }) => (
  <button className={"button"}>{label}</button>
);
