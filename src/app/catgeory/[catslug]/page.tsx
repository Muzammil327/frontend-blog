import Container from "@/src/components/elements/container/page";
import { PostCard } from "@/src/types/post/page";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import Hero from "@/src/components/hero/page";
import PostCardS from "@/src/components/post/PostPreview/page";

export const generateStaticParams = async () => {
  const posts = PostMetadata();
  return posts.map((post) => ({
    catslug: post.catslug,
  }));
};

function Page({ params }: { params: { catslug: string } }) {
  const postMetadata = PostMetadata();
  const data = params.catslug;
  let textWithoutHyphens = data.replace(/-/g, " ");
  return (
    <>
      <Hero title={textWithoutHyphens} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 ">
          {postMetadata
            .filter((post) => post.catslug === params.catslug)
            .map((data: PostCard) => (
              <PostCardS datas={data} key={data.id} />
            ))}
        </div>
      </Container>
    </>
  );
}

export default Page;

export async function generateMetadata(props: any) {
  const slug = props.params.catslug;

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let textWithoutHyphens = slug.replace(/-/g, " ");
  const title = capitalize(textWithoutHyphens);

  return {
    title: title,
    // description: post?.data.para,
    // keywords: data.keywords,
    alternates: {
      canonical: `catgeory/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: title,
      //   // description: post?.data.para,
      url: `catgeory/${slug}`,
      //   images: [
      //     {
      //       // url: data.image,
      alt: title,
      //     },
      //   ],
    },
    twitter: {
      title: title,
      // description: post?.data.para,
      images: {
        // url: data.image,
        alt: title,
      },
    },
  };
}
