import "@/assets/styles/globals.css";
import { cookies } from "next/headers";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value;

  return (
    <html data-theme={theme} lang="en" suppressHydrationWarning>
      {!theme && (
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.setAttribute("data-theme", isDark ? 'dark' : 'light');
            `,
            }}
          />
        </head>
      )}
      <body>{children}</body>
    </html>
  );
}
