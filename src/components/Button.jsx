import { PulseLoader } from "react-spinners";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  ...props
}) {
  const base =
    "px-4 py-2 rounded font-medium focus:outline-none disabled:opacity-50 inline-flex items-center justify-center gap-2";
  let styles = "";

  switch (variant) {
    case "primary":
      styles = "bg-blue-600 text-white hover:bg-blue-500";
      break;
    case "danger":
      styles = "bg-red-600 text-white hover:bg-red-700";
      break;
    case "outline":
      styles = "border border-gray-400 text-gray-700 hover:bg-gray-100";
      break;
    default:
      styles = "bg-gray-300 text-black";
  }

  return (
    <button
      type={type}
      className={`${base} ${styles}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <>
          <PulseLoader size={6} color="#ffffff" />
          <span className="sr-only">Завантаження…</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
