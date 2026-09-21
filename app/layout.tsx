import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopBar, PageContainer, Footer } from "@/components/layout";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-lt-installed="true">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C985H279P4"
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C985H279P4');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <TopBar />

          <PageContainer>{children}</PageContainer>

          <div className="block lg:hidden border-t border-border py-5 flex flex-col gap-3 align-center">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
