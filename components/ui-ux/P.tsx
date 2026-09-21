import { ParagraphProps } from "./types";

export const P = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p
      className={`
        mb-2
        font-normal
        tracking-normal
        text-lg
        leading-normal
        text-textPrimary
        ${className}
      `}
    >
      {children}
    </p>
  );
};
