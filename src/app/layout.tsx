import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phani Sai Ram Munipalli · Senior Product Manager",
  description:
    "Senior Product Manager in the Bay Area. 6 years shipping software at IBM and Walmart. I build with AI, write a weekly newsletter, and host The Hustle Chapters podcast.",
  openGraph: {
    title: "Phani Sai Ram Munipalli · Senior Product Manager",
    description:
      "Senior Product Manager. 6 years shipping software. Builder, writer, podcast host.",
    url: "https://www.phanisaimunipalli.me",
    siteName: "Phani Sai Ram Munipalli",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phani Sai Ram Munipalli · Senior Product Manager",
    description:
      "Senior Product Manager. 6 years shipping software. Builder, writer, podcast host.",
  },
};

// Inline pre-hydration theme script — avoids light/dark flash.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t !== 'dark' && t !== 'light') t = 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
