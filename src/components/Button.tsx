import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  className?: string;
}

export const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  const baseClass = "px-4 py-2 rounded-xl font-medium transition";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  return <button className={`${baseClass} ${variants[variant]} ${className}`} {...props} />;
};
