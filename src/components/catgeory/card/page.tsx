import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/src/components/hero/page";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import Container from "@/src/components/elements/container/page";

export default function CatCard() {
  const postMetadata = PostMetadata();
  const uniqueCategories = [...new Set(postMetadata.map((item) => item.cat))];

  const uniqueCategoriesSlug = [
    ...new Set(postMetadata.map((item) => item.catslug)),
  ];

  interface CategoryContent {
    [key: string]: React.ReactNode;
  }

  const categoryContent: CategoryContent = {
    download: (
      <Image
        src="https://images.pexels.com/photos/617967/pexels-photo-617967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        height={400}
        width={400}
        className="max-w-full"
      />
    ),
    fashion: (
      <Image
        src="https://images.pexels.com/photos/617967/pexels-photo-617967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        height={400}
        width={400}
        className="max-w-full"
      />
    ),
  };
  return (
    <Container>
      <div className="catcard">
        {uniqueCategories.map((category, index) => (
          <div className="catcard-inner" key={category}>
            <div className="img">
              <div>{categoryContent[category] || <p>Default content</p>}</div>
              <div className="shape-divider-bottom">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="tags">
              <span>
                {postMetadata.filter((item) => item.cat === category).length}{" "}
                variants
              </span>
              <h2>{category}</h2>
            </div>
            <Link href={`/catgeory/${uniqueCategoriesSlug[index]}`}>
              <span >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
