import { HeaderProps } from "./types";

export const H2 = ({ children, className = "", id }: HeaderProps) => {
  return (
    <h2
      id={id}
      className={`
        font-upheaval
        lg:text-2xl
        text-xl
        font-bold
        tracking-wider
        text-textPrimary
        ${className}
      `}
    >
      {children}
    </h2>
  );
};
