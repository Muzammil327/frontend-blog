import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostCard } from "@/src/types/post/page";

interface Iprops {
  datas: PostCard;
}

export default function LPostPreview({ datas }: Iprops) {
  return (
    <div className="card flex gap-4 md:flex-row flex-col">
      <div className="img relative md:h-48 md:w-80 overflow-hidden block md:min-w-[320px]">
        <Image src="/h.png" alt="hjkh" width={640} height={360} className="" />
        <div className="cat">
        <a href={`/catgeory/${datas.catslug}`}>{datas.cat}</a>
        </div>
        <div className="tag">
        <a href={`/tag/${datas.tagslug}`}>{datas.tag}</a>
        </div>
      </div>
      <div className="content flex-1">
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
