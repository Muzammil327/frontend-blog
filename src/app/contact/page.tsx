import React from "react";
import type { Metadata } from "next";
import Hero from "@/src/components/hero/page";
import ContactForm from "@/src/components/contact/form/page";

const data = {
  title: "Contact us || MuzBlogs",
  description:
    "you can contact the MuzBlogs any projects.I am a full stack developer engineer with javascript and phython along with cutting edge technology.",
  canonical: "/contact",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/contact",
  keywords: [
    "contact us",
    "muzblogs contact us",
    "blog with muzammil contact us",
    "muzammil blog contact us",
    "muzammil with blog contact us",
  ],
};
export default function Page() {
  return (
    <>
      <Hero title="Contact Us" />
      <ContactForm />
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
