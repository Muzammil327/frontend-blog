import Container from "@/src/components/elements/container/page";
import { PostCard } from "@/src/types/post/page";
import LatestPostPreview from "@/src/components/post/PostPreview/LatestPost/page";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import Hero from "@/src/components/hero/page";


export const generateStaticParams = async () => {
  const posts = PostMetadata();
  return posts.map((post) => ({
    authorslug: post.authorslug,
  }));
};

function Page({ params }: { params: { authorslug: string } }) {
  const postMetadata = PostMetadata();
  return (
    <>
      <Hero title={params.authorslug} />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 ">
          {postMetadata
            .filter((post) => post.authorslug === params.authorslug)
            .map((data: PostCard) => (
              <LatestPostPreview datas={data} key={data.id} />
            ))}
        </div>
      </Container>
    </>
  );
}

export default Page;
