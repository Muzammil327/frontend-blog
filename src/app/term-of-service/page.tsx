import React from "react";
import type { Metadata } from "next";
import Hero from "@/src/components/hero/page";

const data = {
  title: "Term of Services || MuzBlogs",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/term-of-service",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/term-of-service",
  keywords: [
    "Term of Services",
    "muzblogs Term of Services",
    "blog with muzammil Term of Services",
    "muzammil blog Term of Services",
    "muzammil with blog Term of Services",
  ],
};
export default function Page() {
  return (
    <main>
      <Hero title="Term of Service" />
    </main>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
};
