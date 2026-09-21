import { LinkProps } from "./types";

export const A = ({
  children,
  className = "",
  id,
  href,
  target = "_self",
}: LinkProps) => {
  return (
    <a
      id={id}
      href={href}
      target={target}
      className={`
        text-green
        hover:text-green/80
        ${className}
      `}
    >
      {children}
    </a>
  );
};
