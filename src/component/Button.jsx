import React from "react";

const classVariant = {
  primary: "bg-primary-color-600 text-xl text-white",
  secondary: "bg-primary-color-600 text-xl font-bold text-white",
  defolt: "bg-primary-color-600 text-xl  text-white",
};

export default function Button({
  label,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-10 cursor-pointer py-2 rounded-md font-semibold disabled:opacity-50 ${classVariant[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
