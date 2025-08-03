import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  onClick?: () => void;
}
export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  const baseClasses =
    "py-2 px-6 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#386742]";
  const variantClasses = {
    primary:
      "bg-[#0077B6] hover:bg-[#FFFFFF] hover:text-[#000000] text-white border-2 border-[#FFFFFF] hover:outline hover:outline-2 hover:outline-[#0077B6]",
    outline: "border-2 border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF]/10",
  };
  const widthClass = fullWidth ? "w-full" : "";
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
