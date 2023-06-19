interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  color: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, color, className, ...rest } = props;
  const colors =
    color === "primary"
      ? "bg-primary-500 hover:bg-primary-600 focus-visible:outline-primary-700 text-white shadow-lg shadow-primary-500/50"
      : "bg-gray-100 hover:bg-gray-200 focus-visible:outline-gray-300 text-gray-500";

  return (
    // rome-ignore lint/a11y/useButtonType: <explanation>
    <button
      {...rest}
      className={`rounded-md  ${colors}
      px-3 py-1.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed 
      leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
