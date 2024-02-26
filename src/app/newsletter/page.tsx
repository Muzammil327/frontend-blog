import Hero from "@/src/components/hero/page";
import Container from "@/src/components/elements/container/page";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

const data = {
  title: "Our Newsletter || MuzBlogs",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/newsletter",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/newsletter",
  keywords: [
    "newsletter",
    "muzblogs newsletter",
    "blog with muzammil newsletter",
    "muzammil blog newsletter",
    "muzammil with blog newsletter",
  ],
};
export default function Page() {
  return (
    <main>
      <Hero title="Our Newsletter" />
      {/* <Container>
        <div className="newsletter">
          <Image
            className="img-head py-5"
            src="/NEWSLETTER.jpg"
            alt="subscribe to email"
            height={500}
            width={500}
          />
          <h1 className="uppercase font-bold lg:text-3xl sm:text-2xl text-xl py-4">
            subscribe
          </h1>
          <p className="description md:text-base text-sm">
            subscribe to our newsletter & stay updated
          </p>
          <div className="form-box flex items-center justify-center sm:flex-row flex-col mt-10 mx-5">
            <div className="input-main flex items-center  justify-center mr-4 px-3 md:py-4 sm:py-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full md:h-6 h-4 border-none"
              />
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Container> */}
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
