export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="
        min-w-0
        flex-1
        px-8
        py-12
        pt-[5rem]
        gap-2
        flex
        flex-col
        lg:ml-64
        lg:mr-64
      "
    >
      {children}
    </main>
  );
};
