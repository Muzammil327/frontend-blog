import React from "react";
import MenuLeft from "./menuleft/page";
import type { Metadata } from "next";
import Form from "@/src/components/layouts/form/page";
import Container from "@/src/components/elements/container/page";

const datas = {
  title: "CSS Courses ",
  description:
    "MuzBlogs is educational website.i am a full stack developer engineer with javascript and phython along with cutting edge technology.",
  canonical: "/course/css",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/course/css",
  keywords: [
    "course",
    "muzblogs course css",
    "blog with muzammil course css",
    "muzammil blog course css",
    "muzammil with blog course css",
  ],
};
export default function CatgeoryCard() {
  
  return (
    <>
      <div className="md:grid md:grid-cols-9 grid-cols-12">
        <MenuLeft />
        <div className="md:col-span-7 mt-24 md:px-8">
          <h1>CSS-3</h1>
        </div>
      </div>
      <Container>
        <Form params={datas.url} />
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: datas.title,
  description: datas.description,
  keywords: datas.keywords,
  openGraph: {
    title: datas.title,
    description: datas.description,
    url: datas.url,
    images: [
      {
        url: datas.image,
        alt: datas.title,
      },
    ],
  },
  alternates: {
    canonical: datas.canonical,
  },
  robots: {
    index: datas.index,
    follow: datas.follow,
    googleBot: {
      index: datas.index,
      follow: datas.follow,
    },
  },
  twitter: {
    title: datas.title,
    description: datas.description,
    images: {
      url: datas.image,
      alt: datas.title,
    },
  },
};
