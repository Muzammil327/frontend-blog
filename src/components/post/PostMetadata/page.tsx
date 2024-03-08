'use server'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostCard } from "@/src/types/post/page";

const PostMetadata = (): PostCard[] => {
  const baseFolder = "src/app/posts";

  // Recursive function to get all Markdown files in a directory and its subdirectories
  const getAllMarkdownFiles = (dir: string): string[] => {
    const files = fs.readdirSync(dir);
    const markdownFiles = files.flatMap((file) => {
      const filePath = path.join(dir, file);
      return fs.statSync(filePath).isDirectory()
        ? getAllMarkdownFiles(filePath)  // Recursively get files in subdirectories
        : filePath.endsWith(".md")
        ? [filePath]
        : [];
    });
    return markdownFiles;
  };

  // Get all Markdown files within the base folder and its subdirectories
  const allMarkdownPosts = getAllMarkdownFiles(baseFolder);

  // Get gray-matter data from each file.
  const posts = allMarkdownPosts.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id: matterResult.data.id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      para: matterResult.data.para,
      cat: matterResult.data.cat,
      catslug: matterResult.data.catslug,
      tag: matterResult.data.tag,
      tagslug: matterResult.data.tagslug,
      author: matterResult.data.author,
      authorslug: matterResult.data.authorslug,
      slug: path.basename(filePath, ".md"),
      image: matterResult.data.image,
    };
  });

  return posts;
};

export default PostMetadata;
