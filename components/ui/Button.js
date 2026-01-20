export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none";

  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-400",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-100",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
