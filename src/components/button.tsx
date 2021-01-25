import React from "react";

interface IButtonProps {
  canCLick: boolean;
  loading: boolean;
  actionText: string;
}

export const Button: React.FC<IButtonProps> = ({
  canCLick,
  loading,
  actionText,
}) => (
  <button
    className={`text-lg font-medium text-white py-5 rounded-md focus:outline-none ${
      !canCLick
        ? " bg-gray-300 pointer-events-none"
        : " bg-gray-800 hover:opacity-90"
    }`}
  >
    {loading ? "Loading..." : actionText}
  </button>
);
