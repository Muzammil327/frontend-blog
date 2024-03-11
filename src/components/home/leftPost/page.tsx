import React, { ReactNode } from "react";
import Link from "next/link";
import Container from "@/src/components/elements/container/page";
import Hero from "@/src/components/hero/page";
import { FaGitSquare, FaHtml5, FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";

interface Iprops {
  id: number;
  title: String;
  para: String;
  icon: ReactNode;
  color: String;
  link: String;
}

export default function LeftPost() {
  return (
    <>
      {data.map((data: Iprops) => {
        return (
          <>
            <div
              className="course-card my-4 w-full sm:m-2 bg-white rounded-3xl h-[350]"
              key={data.id}
            >
              <Link href={`/course/${data.link}`}>
                <div
                  className={`course-card-img w-full h-[225px] flex items-center justify-center ${data.color}`}
                >
                  <div className="main text-9xl text-white">{data.icon}</div>
                </div>
              </Link>
              <div className="p-4 flex flex-col items-center justify-center ">
                <h4 className="font-semibold">{data.title}</h4>
                <p className="text-center">{data.para}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

const data: Iprops[] = [
  {
    id: 1,
    title: "HTML 5",
    para: "HTML5 is a markup language used for structuring.",
    icon: <FaHtml5 />,
    color: "bg-[#feb548]",
    link: "html",
  },
  {
    id: 2,
    title: "CSS 3",
    para: "Cascading Style Sheets is a style sheet language.",
    icon: <FaCss3 />,
    color: "bg-[#fe5a48]",
    link: "css",
  },
  {
    id: 3,
    title: "Javascript",
    para: "Programming Language and Core Technology.",
    icon: <FaJs />,
    color: "bg-[#29ff00]",
    link: "javascript",
  },
  {
    id: 4,
    title: "Git and Github",
    para: "Distributed Version Control System.",
    icon: <FaGitSquare />,
    color: "bg-[#00ff95]",
    link: "git-and-github",
  },
  {
    id: 4,
    title: "Sanity",
    para: "structured content to endlessly re-use content.",
    icon: <FaGitSquare />,
    color: "bg-[#000901]",
    link: "sanity",
  },
];
