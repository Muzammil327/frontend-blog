import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import MenuLeft from "../menuleft/page";
import Container from "@/src/components/elements/container/page";
import Form from "@/src/components/layouts/form/page";

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

const directories = ["src/app/course/docs/css"];
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const url = "http://localhost:3000/course/css/" + props.params.slug;
  const post = getPostContent(slug, directories);
  return (
    <>
      <div className="md:grid md:grid-cols-9 grid-cols-12">
        <MenuLeft />
        <div className="md:col-span-7 mt-24 md:px-6 px-4">
          <div className="">
              <div className="">
                <div className="flex mt-1">
                  <p className="t4">
                    by{" "}
                    <span className="text-[#ff89ba]">{post?.data.author}</span>
                    <span className="text-[#ff89ba]">{post?.data.keyword}</span>
                  </p>
                  <span className="mx-1">-</span>
                  <p className="t4"> {post?.data.date}</p>
                </div>

                <article className="prose">
                  <Markdown>{post?.content || ""}</Markdown>
                  <p className="py-6">
                    Thanks for reading. Share, and subscribe to my blog for
                    future updates. Feel free to leave any questions or comments
                    below!
                  </p>
                </article>
              </div>
          </div>
        </div>
      </div>
      <Container>
        <Form params={url} />
      </Container>
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
    keywords: post?.data.keyword,
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
        url: post?.data.slug,
        alt: post?.data.para,
      },
    },
  };
}
