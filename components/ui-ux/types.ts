import { ImageProps } from "next/image";

export type HeaderProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export type BoldProps = {
  children: React.ReactNode;
  className?: string;
};

export type DividerProps = {
  className?: string;
};

export type LinkProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export type ListItemProps = {
  children: React.ReactNode;
};

export type ListProps = {
  children: React.ReactNode;
  ordered?: boolean;
};

export type CenterProps = {
  children: React.ReactNode;
  className?: string;
};

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export type AnimatedCardProps = {
  image: string;
  color: string;
};
