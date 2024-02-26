"use client";
import React from "react";
import Container from "@/src/components/elements/container/page";
import Hero from "@/src/components/hero/page";
import { useState, useEffect } from "react";

export default function Page() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Logic to calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle "Next" button click
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle "Previous" button click
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Hero title="CSS Course" />
      <Container>
      <div className="courses-container grid lg:grid-cols-3 grid-cols-1 gap-4">
        {currentItems.map((data) => (
          <>
            <div className="course flex flex-col sm:m-3 m-0 bg-white max-w-full overflow-hidden rounded-lg">
              <div className="course-preview bg-red-400 p-5 text-white">
                <h6 className="uppercase opacity-60 m-0 tracking-[1px]">
                Chapter {data.chapter}
                </h6>
                <h2 className="sm:font-normal text-xl my-2 mx-0 tracking-[1px]">
                  CSS-3 {data.condition}
                </h2>
              </div>
              <div className="course-info w-full relative py-3 px-5">
                
                <h2 className="sm:font-semibold text-xl my-2 mx-0 tracking-[1px]">
                  {data.title}
                </h2>
                <p>{data.para}</p>
                <button className="btn border-0 -top-24 right-5 absolute bg-white text-black px-3 py-2 text-sm rounded-md">
                  Continue
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-red-400 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            className="bg-red-400 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
     
       
      </Container>
    </>
  );
}

const data = [
  {
    id: 1,
    condition: "Begginer",
    chapter: "1",
    title: "Introduction to CSS",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 2,
    condition: "Begginer",
    chapter: "2",
    title: "CSS Syntax",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 3,
    condition: "Begginer",
    chapter: "3",
    title: "Applying CSS",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 4,
    condition: "Begginer",
    chapter: "4",
    title: "CSS Comments",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 5,
    condition: "Begginer",
    chapter: "5",
    title: "CSS Margin",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 6,
    condition: "Begginer",
    chapter: "6",
    title: "CSS Paddding",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 7,
    condition: "Begginer",
    chapter: "7",
    title: "CSS Height",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 8,
    condition: "Begginer",
    chapter: "8",
    title: "CSS Width",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 9,
    condition: "Begginer",
    chapter: "9",
    title: "CSS Borders",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 10,
    condition: "Begginer",
    chapter: "10",
    title: "CSS Color",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 11,
    condition: "Begginer",
    chapter: "11",
    title: "CSS Outline",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 12,
    condition: "Begginer",
    chapter: "12",
    title: "CSS Text",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 13,
    condition: "Begginer",
    chapter: "13",
    title: "CSS Fonts",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 14,
    condition: "Begginer",
    chapter: "14",
    title: "CSS Display",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 15,
    condition: "Intermediate",
    chapter: "15",
    title: "Background Color",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 16,
    condition: "Intermediate",
    chapter: "16",
    title: "Box Model",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 16,
    condition: "Intermediate",
    chapter: "16",
    title: "CSS Position",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 35,
    condition: "Advanced",
    chapter: "35",
    title: "CSS Selector",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 36,
    condition: "Advanced",
    chapter: "36",
    title: "CSS Pseudo Classes",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 37,
    condition: "Advanced",
    chapter: "37",
    title: "CSS Pseudo Elements",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 38,
    condition: "Advanced",
    chapter: "38",
    title: "CSS Transform",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 39,
    condition: "Advanced",
    chapter: "39",
    title: "CSS Transition",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 40,
    condition: "Advanced",
    chapter: "40",
    title: "CSS Animmation",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 41,
    condition: "PRO",
    chapter: "40",
    title: "CSS Grid",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
  {
    id: 42,
    condition: "PRO",
    chapter: "40",
    title: "CSS Flexbox",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, commodi! Enim pariatur reprehenderit accusantium voluptate.",
  },
];
