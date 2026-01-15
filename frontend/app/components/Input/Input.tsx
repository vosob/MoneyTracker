import classNames from "classnames";
import { ReactNode } from "react";

interface InputProps {
  value?: string;
  variant?: "default" | "withIcon";
  placeholder?: string;
  icon?: ReactNode;
  className?: string;
}

export const Input = ({
  value,
  variant = "default",
  placeholder,
  icon,
  className,
}: InputProps) => {
  const baseStyles =
    "focus:outline-none rounded-md border border-[var(--main-dark)] px-4 py-2.5 text-[var(--main-dark)] w-full cursor-pointer";

  const variantStyles = {
    withIcon: "pl-10",
    default: "",
  };
  const styles = classNames(baseStyles, variantStyles[variant], className);

  if (variant === "withIcon") {
    return (
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--main-dark)]">
          {icon}
        </div>
        <input className={styles} placeholder={placeholder} value={value} />
      </div>
    );
  }

  return <input className={styles} placeholder={placeholder} value={value} />;
};
