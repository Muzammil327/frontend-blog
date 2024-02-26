import React from "react";
import Container from "@/src/components/elements/container/page";
import Hero from "@/src/components/hero/page";
import { FaGit, FaGitSquare, FaHtml5, FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Hero title="Courses" />

      <Container>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data.map((data: any) => (
            <>
              <div className="course-card w-full sm:m-2 bg-white rounded-3xl h-[350]">
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
          ))}
        </div>
      </Container>
    </>
  );
}

const data = [
  {
    id: 1,
    title: "HTML 5",
    para: "HTML5 is a markup language used for structuring.",
    icon: <FaHtml5 />,
    color: "bg-[#feb548]",
    link:"html"
  },
  {
    id: 2,
    title: "CSS 3",
    para: "Cascading Style Sheets is a style sheet language.",
    icon: <FaCss3 />,
    color: "bg-[#fe5a48]",
    link:"css"
  },
  {
    id: 3,
    title: "Javascript",
    para: "Programming Language and Core Technology.",
    icon: <FaJs />,
    color: "bg-[#29ff00]",
    link:"javascript"
  },
  {
    id: 4,
    title: "Git and Github",
    para: "Distributed Version Control System.",
    icon: <FaGitSquare />,
    color: "bg-[#00ff95]",
    link:"git-and-github"
  },
];
