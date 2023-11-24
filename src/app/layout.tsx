import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import "./globals.css";
import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/SeesionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galsen Coding Challenge",
  description: "Galsen Coding Challenge",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const session = await getServerSession();
    return (
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider session={session}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />
              {children}
            </ThemeProvider>
          </AuthProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error fetching session:", error);
    return <div>Error loading session</div>;
  }
}
