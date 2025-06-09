import React from "react";

type ButtonNameProps = {
  buttonName: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const Button = ({ buttonName, size, onClick }: ButtonNameProps) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full 
      ${
        size === "medium"
          ? "md:w-[200px] max-w-md"
          : size === "large"
          ? "md:w-[300px] max-w-md"
          : "md:w-[150px] max-w-md"
      }`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
