import React from "react";
import type { Metadata } from "next";
import CatgeoryView from "@/src/view/catgeory/page";

const data = {
  title: "Catgeory || MuzBlogs",
  description:
    "MuzBlogs provides blogs on the catgeory og programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/catgeory",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/catgeory",
  keywords: [
    "catgeory us",
    "muzblogs catgeory us",
    "blog with muzammil catgeory us",
    "muzammil blog catgeory us",
    "muzammil with blog catgeory us",
  ],
};

export default function page() {
  return (
    <>
      <CatgeoryView />
    </>
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
