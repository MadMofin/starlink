import { DividerProps } from "./types";

export const Divider = ({ className = "" }: DividerProps) => {
  return (
    <hr
      className={`
        my-8
        h-px
        w-full
        border-0
        bg-divider/20
        ${className}
      `}
    />
  );
};
