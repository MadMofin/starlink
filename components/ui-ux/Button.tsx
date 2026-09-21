import { ButtonProps } from "./types";

export const Button = ({
  type = "button",
  onClick,
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
            mt-4
            cursor-pointer
            rounded-md
            bg-green
            px-8
            py-3
            font-bold
            text-background
            transition
            hover:opacity-80
            ${className}
        `}
    >
      {children}
    </button>
  );
};
