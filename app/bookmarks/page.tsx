"use client"

import About from "@/components/about/About"
import Bookmark from "@/components/bookmark/Bookmark";
import Nav from "@/components/navbar/Nav"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <main data-scroll-container className="flex flex-col items-center">
        <Bookmark />
      </main>
    </>
  )
}
