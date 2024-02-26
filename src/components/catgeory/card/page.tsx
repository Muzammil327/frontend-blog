import React from "react";
import Link from "next/link";
import PostMetadata from "../../post/PostMetadata/page";
import Container from "@/src/components/elements/container/page";
import ImageComponent from "../../elements/ImageComponent/page";

export default function CatgeoryCard() {
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
      <ImageComponent
        src="/h.png"
        alt="download blog post"
        height={360}
        width={640}
      />
    ),
    fashion: (
      <ImageComponent
        src="/h.png"
        alt="download blog post"
        height={360}
        width={640}
      />
    ),
  };
  return (
    <Container>
      <div className="catgeorycard my-16">
        {uniqueCategories.map((category, index) => (
          <div className="inner" key={category}>
            <div className="img">
              <span>{categoryContent[category] || <p>Default content</p>}</span>
              <div className="shape-divider">
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
              <span>
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
