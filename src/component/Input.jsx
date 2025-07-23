import React from "react";

const variantClasses = {
  default: "border-primary-color-500 focus:ring-primary-color-700",
  danger: "border-red-500 focus:ring-red-500",
};

export default function Input({
  label,
  name,
  placeholder,
  value,
  type = "text",
  onChange,
  className = "",
  variant = "default",
}) {
  return (
    <div className="w-full">
      {label && <label> {label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={` w-[600px] mb-[5px] border border-primary-color-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color-600 focus:border-primary-color-600 transition ${className} ${variantClasses[variant]}  max-sm:w-[310px] max-md:w-[200px] max-lg:w-[420px]`}
      />
    </div>
  );
}
