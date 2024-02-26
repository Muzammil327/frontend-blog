import Container from "@/src/components/elements/container/page";
import { PostCard } from "@/src/types/post/page";
import LatestPostPreview from "@/src/components/post/PostPreview/LatestPost/page";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import Hero from "@/src/components/hero/page";

export const generateStaticParams = async () => {
  const posts = PostMetadata();
  return posts.map((post) => ({
    catslug: post.catslug,
  }));
};

function Page({ params }: { params: { catslug: string } }) {
  const postMetadata = PostMetadata();

  return (
    <>
      <Hero title={params.catslug} />
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {postMetadata
          .filter((post) => post.catslug === params.catslug)
          .map((data: PostCard) => (
              <LatestPostPreview datas={data} key={data.id} />
          ))}
      </div>
    </Container>
    </>
  );
}

export default Page;
