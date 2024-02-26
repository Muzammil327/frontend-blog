import React from "react";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import { PostCard } from "@/src/types/post/page";
import Container from "@/src/components/elements/container/page";
import LHeroPostPreview from "@/src/components/post/PostPreview/left/page";
import RHeroPostPreview from "@/src/components/post/PostPreview/right/page";

export default function HomeHero() {
  const postMetadata = PostMetadata();

  return (
    <Container>
      <div className="hero grid lg:grid-cols-6">
        <div className="lg:col-span-2">
          {postMetadata.slice(0, 1).map((data: PostCard) => (
            <>
              <LHeroPostPreview datas={data} key={data.id} />
            </>
          ))}
        </div>
        <div className="lg:col-span-4 grid md:grid-cols-2">
          {postMetadata.slice(1, 5).map((data: PostCard) => (
            <>
              <RHeroPostPreview datas={data} key={data.id} />
            </>
          ))}
        </div>
      </div>
    </Container>
  );
}
