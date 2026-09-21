import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopBar, PageContainer } from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-lt-installed="true">
      <body>
        <ThemeProvider>
          <TopBar />
          <PageContainer>{children}</PageContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
