import TagView from '@/src/view/tag/page'
import React from 'react'
import type { Metadata } from "next";

const data = {
  title: "Tags || MuzBlogs",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/tag",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/tag",
  keywords: [
    "tag",
    "muzblogs tag",
    "blog with muzammil tag",
    "muzammil blog tag",
    "muzammil with blog tag",
  ],
};
export default function page() {
  return (
    <>
    <TagView />
    </>
  )
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
