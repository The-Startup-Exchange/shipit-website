"use client";

import Image from "next/image";
import { drukWide, plus_jakarta_sans } from "./fonts";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { motion } from "framer-motion";
import ImageList from "@/components/imageList";

export default function Home() {
  return (
    <>
      <div className="absolute p-4 right-0">
        <ModeToggle />
      </div>
      <main className="min-h-screen w-screen md:px-16 px-4">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center z-20">
            <div
              className="w-full text-center"
              style={{ fontSize: "5vw", whiteSpace: "nowrap" }}
            >
              <span className={`${drukWide.className} fill-primary ship-it`}>
                ship it
              </span>
            </div>
          </div>
          <ImageList />
        </div>
        <h2
          className={`${plus_jakarta_sans.className} text-2xl md:text-4xl text-left `}
        >
          A space to forget about school and ship your next idea.
        </h2>
        <div className="pt-2 flex space-x-2">
          <Button>Ship Now</Button>
          <Button variant="outline">See more demos</Button>
        </div>
      </main>
    </>
  );
}
