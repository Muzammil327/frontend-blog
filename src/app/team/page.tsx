import Hero from "@/src/components/hero/page";
import AuthorView from "@/src/view/author/page";
import type { Metadata } from "next";

const data = {
  title: "Team Member || MuzBlogs",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/team",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/team",
  keywords: [
    "team",
    "muzblogs team",
    "blog with muzammil team",
    "muzammil blog team",
    "muzammil with blog team",
  ],
};

export default function Page() {
  return (
    <>
      <Hero title="Team Member" />
      <AuthorView />
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
