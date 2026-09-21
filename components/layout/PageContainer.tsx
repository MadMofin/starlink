export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`
        min-w-0
        flex-1
        mt-[4rem]
        gap-2
        flex
        flex-col
      `}
    >
      {children}
    </main>
  );
};
