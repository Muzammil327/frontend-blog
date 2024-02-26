import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostCard } from "@/src/types/post/page";

interface Iprops {
  datas: PostCard;
}

export default function LatestPostPreview({ datas }: Iprops) {
  return (
    <div className="card">
      <div className="img">
        <Image
          src="/h.png"
          alt="hjkh"
          width={500}
          height={500}
          className="mb-2"
        />
        <div className="cat">
          <a href={`/catgeory/${datas.catslug}`}>{datas.cat}</a>
        </div>
        <div className="tag">
          <a href={`/tag/${datas.tagslug}`}>{datas.tag}</a>
        </div>
      </div>
      <div className="content">
        <Link href={`/posts/${datas.slug}`} className="">
          {datas.title}
        </Link>

        <div className="inner">
          <a href={`/author/${datas.authorslug}`}>
            <span>by </span>{datas.author}
          </a>
          <span>{datas.date}</span>
        </div>
        <p>{datas.para}</p>
      </div>
    </div>
  );
}
