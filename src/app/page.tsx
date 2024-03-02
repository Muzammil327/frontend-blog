import React from "react";
import type { Metadata } from "next";
import ViewHome from "@/src/view/home/page";

const data = {
  title: "TechBlogCode || Latest Technology",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://techblogcode.vercel.app/",
  keywords: [
    "muzblogs",
    "blog with muzammil",
    "muzammil blog",
    "muzammil with blog",
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
