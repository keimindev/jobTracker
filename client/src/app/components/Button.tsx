import React from "react";

type ButtonNameProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  color?: string;
};

const Button = ({ children, size, onClick, color }: ButtonNameProps) => {
  color = color || "blue"; // Default color is blu
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`bg-${color}-500 hover:bg-${color}-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full 
      ${
        size === "medium"
          ? "md:w-[200px] max-w-md"
          : size === "large"
          ? "md:w-[300px] max-w-md"
          : "md:w-[150px] max-w-md"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
