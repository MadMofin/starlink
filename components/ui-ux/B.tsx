import { BoldProps } from "./types";

export const B = ({ children, className = "" }: BoldProps) => {
  return (
    <span
      className={`
        font-bold
        tracking-normal
        text-lg
        leading-7
        ${className}
      `}
    >
      {children}
    </span>
  );
};
