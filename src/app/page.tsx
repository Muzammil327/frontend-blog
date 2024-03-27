import React from "react";
import type { Metadata } from "next";
import ViewHome from "@/src/view/home/page";

const data = {
  title: "Muzammil Mentor Blogs",
  description:
    "Muzammil Mentor provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzammilmentor.com/",
  keywords: [
    "Muzammil Mentor Blogs",
    "Blogs Muzammil",
    "Mentor Blogs",
    "Muzammil Blogs",
  ],
};

export default function Home() {
  return (
    <main>
      <ViewHome />
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
