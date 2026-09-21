import { CenterProps } from "./types";

export const Center = ({ children, className = "" }: CenterProps) => {
  return (
    <div
      className={`
        flex
        justify-center
        items-center
        gap-2
        ${className}
      `}
    >
      {children}
    </div>
  );
};
