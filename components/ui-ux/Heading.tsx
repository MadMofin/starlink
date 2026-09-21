import { HeaderProps } from "./types";

export const Heading = ({ children, className = "", id }: HeaderProps) => {
  return (
    <h1
      id={id}
      className={`
        font-perandory
        lg:text-[140px]
        text-4xl
        font-bold
        tracking-wider
        ${className}
      `}
    >
      {children}
    </h1>
  );
};
