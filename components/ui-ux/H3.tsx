import { HeaderProps } from "./types";

export const H3 = ({ children, className = "", id }: HeaderProps) => {
  return (
    <h2
      id={id}
      className={`
        text-md
        font-bold
        font-sans
        text-textPrimary
        ${className}
      `}
    >
      {children}
    </h2>
  );
};
