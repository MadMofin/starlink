import { HeaderProps } from "./types";

export const H2 = ({ children, className = "", id }: HeaderProps) => {
  return (
    <h2
      id={id}
      className={`
        text-1xl
        font-bold
        tracking-[5px]
        text-textPrimary
        uppercase
        ${className}
      `}
    >
      {children}
    </h2>
  );
};
