import React from "react";
import Link from "next/link";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import Container from "@/src/components/elements/container/page";

export default function TagCard() {
  const postMetadata = PostMetadata();
  const uniqueCategories = [...new Set(postMetadata.map((item) => item.tag))];
  const uniqueTagSlug = [...new Set(postMetadata.map((item) => item.tagslug))];
console.log("uniqueTagSlug:", uniqueTagSlug)
console.log("uniqueCategories:", uniqueCategories)
  return (
    <>
      <Container>
        <div className="catgeorycard my-16">
          {uniqueCategories.map((category, index) => {
            return (
              <>
                <div className="inner" key={index}>
                  <div className="tags">
                    <h2>{category}</h2>
                    <span>
                      {
                        postMetadata.filter((item) => item.tag === category)
                          .length
                      }{" "}
                    </span>
                  </div>
                  <Link href={`/tag/${uniqueTagSlug[index]}`}>
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
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
}
