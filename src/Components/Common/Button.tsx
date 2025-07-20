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
    primary: "bg-[#386742] hover:bg-[#386742]/90 text-white",
    outline: "border-2 border-[#386742] text-[#386742] hover:bg-[#386742]/10",
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
