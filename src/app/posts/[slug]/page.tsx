import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/post/PostMetadata/page";
import path from "path";
import Hero from "@/src/components/hero/page";
import Container from "@/src/components/elements/container/page";
import LeftPost from "@/src/components/home/leftPost/page";
import RightPost from "@/src/components/post/rightPost/page";

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

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  // const post = getPostContent(slug);
  const post = getPostContent(slug, directories);
  return (
    <>
      <Hero title={post?.data.title} />
      <div className="lg:py-6">
        <Container>
          <div className="grid lg:grid-cols-8 grid-cols-1 md:gap-4">
            <div className="md:col-span-6">
              <div className="my-6">
                <h2 className="text-3xl t1 font-bold ">{post?.data.title}</h2>
                <div className="flex mt-1">
                  <p className="t4">by <span className="text-red-500">{post?.data.author}</span></p>
                <span className="mx-1">-</span>
                <p className="t4"> {post?.data.date}</p>
                </div>
              </div>

              <article className="prose">
                <Markdown>{post?.content || ""}</Markdown>
                <p className="py-6">Thanks for reading. Share, and subscribe to my blog for future updates. Feel free to leave any questions or comments below!</p>
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
