import React from "react";
import type { Metadata } from "next";
import Hero from "@/src/components/hero/page";

const data = {
  title: "About us || MuzBlogs",
  description:
    "MuzBlogs is educational website.i am a full stack developer engineer with javascript and phython along with cutting edge technology.",
  canonical: "/about",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/about",
  keywords: [
    "about us",
    "muzblogs about us",
    "blog with muzammil about us",
    "muzammil blog about us",
    "muzammil with blog about us",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero title="About Us" />
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
