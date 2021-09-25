import { MouseEventHandler } from "react";

interface ButtonProps {
  type: "button" | "submit";
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button
      type={type}
      className="text-sm font-semibold mt-4 w-48 bg-gray-800 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
