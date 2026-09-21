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
        text-primary
        hover:text-primary/80
        ${className}
      `}
    >
      {children}
    </a>
  );
};
