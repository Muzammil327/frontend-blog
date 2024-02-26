import React from "react";
import Container from "@/src/components/elements/container/page";
import Hero from "@/src/components/hero/page";

export default function page() {
  return (
    <>
      <Hero title="React JS Course" />

      <Container>
        <div className="courses-container grid lg:grid-cols-2 grid-cols-1 gap-4">
          {data.map((data: any) => (
            <>
              <div className="course flex flex-col lg:flex-col sm:m-3 m-0 bg-white max-w-full overflow-hidden rounded-lg">
                <div className="course-preview md:p-7 p-5 text-white">
                  <h6 className="uppercase opacity-60 m-0 tracking-[1px]">
                    Course
                  </h6>
                  <h2 className="sm:font-semibold sm:text-2xl text-xl my-2 mx-0 tracking-[1px]">
                    {data.condition}
                  </h2>
                </div>
                <div className="course-info w-full relative py-3 px-5">
                  <h6 className="uppercase opacity-60 m-0 tracking-[1px]">
                  {data.chapter}
                  </h6>
                  <h2 className="sm:font-semibold sm:text-2xl text-xl my-2 mx-0 tracking-[1px]">
                  {data.title}
                  </h2>
                  <p>{data.para}</p>
                  <button className="btn border-0 sm:top-4 -top-24 right-5 absolute sm:bg-blue-500 bg-white sm:text-white text-black sm:px-6 px-1 sm:py-3 py-2 sm:text-base text-sm sm:rounded-[50px] rounded-md">
                    Continue
                  </button>
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
    condition:"React JS Begginer",
    chapter: "Chapter 1",
    title: "Callbacks & Closures",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 2,
    condition:"React JS Begginer",
    chapter: "Chapter 1",
    title: "Callbacks & Closures",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 3,
    condition:"React JS Begginer",
    chapter: "Chapter 1",
    title: "Callbacks & Closures",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 4,
    condition:"React JS Begginer",
    chapter: "Chapter 1",
    title: "Callbacks & Closures",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
];
