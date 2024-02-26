import React from "react";
import type { Metadata } from "next";
import Hero from "@/src/components/hero/page";

const data = {
  title: "Privacy Policy || MuzBlogs",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/privacy-policy",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/privacy-policy",
  keywords: [
    "Privacy Policy",
    "muzblogs Privacy Policy",
    "blog with muzammil Privacy Policy",
    "muzammil blog Privacy Policy",
    "muzammil with blog Privacy Policy",
  ],
};
export default function Page() {
  return (
    <>
      <Hero title="Privacy Policy" />
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
