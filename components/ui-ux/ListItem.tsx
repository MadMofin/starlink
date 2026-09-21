"use client";

import { ListItemProps } from "./types";

export const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className="flex items-center gap-1 text-textPrimary">{children}</li>
  );
};
