import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import Container from "@/src/components/elements/container/page";

export default function TagCard() {
  const postMetadata = PostMetadata();
  const uniqueCategories = [...new Set(postMetadata.map((item) => item.tag))];
  const uniqueTagSlug = [...new Set(postMetadata.map((item) => item.tagslug))];

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
    tag1: (
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
    <>
      <Container>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 justify-center">
          {uniqueCategories.map((category, index) => (
            <div className="box" key={category}>
              {categoryContent[category] || <p>Default content</p>}

              <Link href={`/tag/${uniqueTagSlug[index]}`}>
                <div className="box__title">
                  <h6>
                    {category}(
                    {
                      postMetadata.filter((item) => item.tag === category)
                        .length
                    }
                    )
                  </h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
