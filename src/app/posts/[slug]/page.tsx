import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Container from "@/src/components/elements/container/page";
import RightPost from "@/src/components/post/rightPost/page";
import Hero from "@/src/components/hero/page";
import Image from "next/image";
import BannerImageComponent from "@/src/components/elements/BannerImageComponent/page";

const getPostContent = (slug: string, directories: string[]) => {
  for (const directory of directories) {
    const folder = path.join(process.cwd(), directory);
    const file = path.join(folder, `${slug}.md`);

    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      const matterResult = matter(content);
      return matterResult;
    }
  }

  return null;
};

// Example usage
const directories = [
  "src/app/posts/docs/download/vscode",
  "src/app/posts/docs/download/git",
  "src/app/posts/docs/download/nodejs",
  "src/app/posts/docs/vscode/extension",
  "src/app/posts/docs/fashion/",
  "src/app/posts/docs/javascript/array/",
];
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug, directories);

  return (
    <>
      <Hero title={post?.data.title} />
      <div className="lg:py-6">
        <Container>
          <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-6">
            <div className="md:col-span-6">
              <div className="my-6">
                {/* <h2 className="md:text-3xl sm:text-2xl text-xl t1 font-bold capitalize">
                  {post?.data.title}
                </h2> */}
                <BannerImageComponent
                  src={post?.data.image}
                  alt={post?.data.title}
                  height={1260}
                  width={2240}
                />
                {/* <Image
                  src={post?.data.image}
                  alt={post?.data.title}
                  title={post?.data.title}
                  height={500}
                  width={500}
                  className="w-full h-auto"
                /> */}
                <div className="flex mt-1">
                  <p className="t4">
                    by{" "}
                    <span className="text-[#ff89ba]">{post?.data.author}</span>
                  </p>
                  <span className="mx-1">-</span>
                  <p className="t4"> {post?.data.date}</p>
                </div>
              </div>

              <article className="prose">
                <Markdown>{post?.content || ""}</Markdown>
                <p className="py-6">
                  Thanks for reading. Share, and subscribe to my blog for future
                  updates. Feel free to leave any questions or comments below!
                </p>
              </article>
            </div>

            <div className="md:col-span-2">
              <RightPost />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PostPage;

export async function generateMetadata(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug, directories);
  return {
    title: post?.data.title,
    description: post?.data.para,
    // keywords: data.keywords,
    alternates: {
      canonical: `posts/${slug}`,
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
      title: post?.data.title,
      description: post?.data.para,
      url: `posts/${slug}`,
      images: [
        {
          url: post?.data.image,
          alt: post?.data.para,
        },
      ],
    },
    twitter: {
      title: post?.data.title,
      description: post?.data.para,
      images: {
        url: post?.data.image,
        alt: post?.data.para,
      },
    },
  };
}
