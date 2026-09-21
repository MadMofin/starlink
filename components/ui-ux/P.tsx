import { ParagraphProps } from "./types";

export const P = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p
      className={`
        font-libreBaskerville
        tracking-widest
        leading-normal
        text-textPrimary
        ${className}
      `}
    >
      {children}
    </p>
  );
};
