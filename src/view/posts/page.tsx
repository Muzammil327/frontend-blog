import React from "react";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import { PostCard } from "@/src/types/post/page";
import Container from "@/src/components/elements/container/page";
import Hero from "@/src/components/hero/page";
import LatestPostPreview from "@/src/components/post/PostPreview/LatestPost/page";

export default function ViewPost() {
  const postMetadata = PostMetadata();
  return (
    <>
      <Hero title="Blogs Posts" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postMetadata.map((data: PostCard) => (
            <LatestPostPreview datas={data} key={data.id} />
          ))}
        </div>
      </Container>
    </>
  );
}
