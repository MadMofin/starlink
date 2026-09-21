export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className="
        ml-auto
        text-xs
        text-green
        rounded-full
        bg-green/10
        px-2
        py-0.5
        text-xs
        text-green"
    >
      {children}
    </span>
  );
};
