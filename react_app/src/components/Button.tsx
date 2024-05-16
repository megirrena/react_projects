import React from "react";
interface Props {
  children: string;
  variant?: string;
  onClick: () => void;
}
const Button = ({ children, onClick, variant = "primary" }: Props) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
