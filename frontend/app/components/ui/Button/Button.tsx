import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "green" | "clear" | "red";
  size?: "default" | "small";
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "green",
  size = "default",
  onClick,
  className,
}: ButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium text-lg rounded-md transition-colors focus:outline-none cursor-pointer";

  const variantStyles = {
    green:
      "bg-gradient-to-b from-[#3B5D63] to-[#355359] hover:from-[#3F6269] hover:to-[#39585E] transition-colors text-white",
    red: "bg-[var(--main-red)] text-white hover:bg-[#c20505] transition-colors",
    clear:
      "border border-[var(--main-dark)] text-[var(--main-dark)] hover:bg-[var(--main-dark)] hover:bg-opacity-5 transition-colors hover:text-white",
  };

  const sizes = {
    default: "w-[410px] h-11",
    small: "w-[255px] h-11",
  };

  const styles = classNames(
    baseStyle,
    variantStyles[variant],
    sizes[size],
    className
  );

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};
