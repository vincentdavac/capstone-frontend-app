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
    "py-2 px-6 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-1 ";
  const variantClasses = {
    primary:
      "bg-[#39A7FF] hover:bg-[#FFFFFF] hover:text-[#39A7FF] text-white border-1 border-[#FFFFFF] hover:outline hover:outline-1 hover:outline-[#39A7FF]",
    outline:
      "bg-[#FFFFFF] hover:bg-[#39A7FF] text-[#39A7FF] hover:text-[#FFFFFF] outline outline-1 outline-[#39A7FF] hover:outline-[#39A7FF]",
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
