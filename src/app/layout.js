import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAB from "../components/FAB";
import { getMetadata } from "../lib/seo";

export const metadata = getMetadata();

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#13161c" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </main>
          <Footer />
          <FAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
