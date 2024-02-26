import React from "react";

export default function Hero(props: { title: string }) {
  return <h1 className="py-40 capitalize bg-red-100 mb-10 text-black text-3xl text-center font-bold container mx-auto c">{props.title}</h1>;
}
