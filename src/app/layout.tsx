import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageProvider from "../components/provider/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muz Mentor",
  description:
    "Main purpose of Muz Mentor is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  keywords: ["Next.js", "React", "JavaScript"],
  openGraph: {
    title: "Muz Mentor",
    description: "Muz Mentor",
  },
  metadataBase: new URL("https://muzmentor.vercel.app"),
  twitter: {
    title: "Muz Mentor",
    description: "The React Framework for the Web",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Next.js" />
        <meta name="author" content="Muhammad Muzammil Safdar" />
        <link rel="author" href="https://muzmentor.vercel.app/" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="Next.js,React,JavaScript" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content="muzmentor.vercel.app" />
        <meta name="publisher" content="muzmentor.vercel.app" />
        {/* og */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="muzmentor.vercel.app" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        {/* icon */}
        <meta name="theme-color" content="#f73e3e" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@muzmentor" />
        <meta property="twitter:domain" content="muzmentor.vercel.app" />
        <meta
          name="ahrefs-site-verification"
          content="95f3550772b63229279ca631721b0e1043947f6997958c0d956af12e0b96ddb7"
        ></meta>

        <meta
          name="google-site-verification"
          content="0YpJh4QI1icQpfh1Y1WD9teVKzb6OoAvExQtMRRyoHk"
        />
      </head>
      <body className={inter.className}>
        <PageProvider>{children}</PageProvider>
      </body>
    </html>
  );
}

