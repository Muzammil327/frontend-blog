import React from "react";
import Footer from "@/src/components/layouts/footer/page";
import SubHeader from "@/src/components/layouts/subHeader/page";

import '@/src/styles/globals.css'
import '@/src/styles/scss/main.scss'
import Navbar from "../layouts/navbar/page";

export default function PageProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubHeader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
