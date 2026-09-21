import { CodeProps } from "./types";

export const B = ({ children, className = "" }: CodeProps) => {
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
