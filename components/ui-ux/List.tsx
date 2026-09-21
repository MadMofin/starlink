import { ListProps } from "./types";

export const List = ({ children, ordered = false }: ListProps) => {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={`flex flex-col gap-1 ${ordered ? "list-decimal pl-3 mt-2" : "list-disc pl-3 mt-2 mb-2"}`}
    >
      {children}
    </Tag>
  );
};
