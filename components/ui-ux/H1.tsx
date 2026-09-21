import { HeaderProps } from "./types";

export const H1 = ({ children, className = "", id }: HeaderProps) => {
  return (
    <h1
      id={id}
      className={`
        font-upheaval
        lg:text-5xl
        text-4xl
        font-bold
        tracking-wider
        text-textPrimary
        mb-2
        ${className}
      `}
    >
      {children}
    </h1>
  );
};
