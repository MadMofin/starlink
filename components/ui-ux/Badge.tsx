export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className="
        ml-auto
        text-xs
        text-primary
        rounded-full
        bg-primary/10
        px-2
        py-0.5
        text-xs
        text-primary"
    >
      {children}
    </span>
  );
};
