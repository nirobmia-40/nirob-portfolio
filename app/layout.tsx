import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4EE" },
    { media: "(prefers-color-scheme: dark)", color: "#181715" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nirobmia.dev"),
  title: "Nirob Mia — Independent Learner, Digital Builder & Entrepreneur",
  description:
    "Personal portfolio of Nirob Mia. Exploring modern technology, building creative projects, and turning ideas into opportunities. Warm Coffee Editorial aesthetic.",
  keywords: [
    "Nirob Mia",
    "Independent Learner",
    "Digital Product Builder",
    "Creative Developer",
    "Entrepreneurship",
    "Odhyay",
    "The Dropout College",
    "Akhra Stationary",
    "Clip Cutter",
    "Drop Clip",
  ],
  authors: [{ name: "Nirob Mia", url: "https://github.com/nirobmia-40" }],
  creator: "Nirob Mia",
  openGraph: {
    title: "Nirob Mia — Independent Learner & Digital Builder",
    description:
      "Exploring technology, building creative projects, and turning ideas into opportunities.",
    url: "https://nirobmia.dev",
    siteName: "Nirob Mia Portfolio",
    images: [
      {
        url: "/images/nirob-mia.png",
        width: 1200,
        height: 630,
        alt: "Nirob Mia - Personal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirob Mia — Independent Learner & Digital Builder",
    description:
      "Technology, Creative Projects & Business. Personal portfolio of Nirob Mia.",
    images: ["/images/nirob-mia.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-coffee-ivory text-coffee-textLight dark:bg-coffee-softblack dark:text-coffee-textDark transition-colors duration-300 min-h-screen selection:bg-coffee-caramel selection:text-coffee-ivory">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
