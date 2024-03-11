import React from "react";
import Link from "next/link";
import CourseMetadata from "@/src/components/course/PostMetadata/page";

export default function MenuLeft() {
  const postMetadata = CourseMetadata();
  // filter by catgeory
  const catgeory = postMetadata.filter((item) => item.cat === "css");
  const catgeorySortedById = catgeory.sort(
    (a, b) => parseInt(a.id) - parseInt(b.id)
  );

  // Get unique categories
  const uniqueCategories = [
    ...new Set(catgeorySortedById.map((item) => item.title)),
  ];

  return (
    <>
      <button className="block md:hidden fixed top-28 right-0 bg-red-400 rounded-md py-2 px-4 text-white">
        open
      </button>
      <div className="md:col-span-2 bg-gray-200 mt-20 md:block hidden pt-10">
        {uniqueCategories.map((category, index) => (
          <div key={category}>
            <Link
              className=" text-black block py-3 px-4 hover:bg-gray-100"
              href={`/course/css/${category
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
