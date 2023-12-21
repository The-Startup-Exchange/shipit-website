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
      <main className="min-h-screen w-screen px-16">
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
            {/* <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 16"
              preserveAspectRatio="none"
              className="fill-primary"
              style={{ marginTop: "-16px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>
                {`.stretchText { font-size: 48px; white-space: pre; }`}
              </style>
              <text
                x="50%"
                y="50%"
                className={`${drukWide.className} stretchText`}
                dominant-baseline="middle"
                text-anchor="middle"
              >
                ship it
              </text>
            </svg> */}

            {/* <h1
            className={`${drukWide.className} xl:text-10xl lg:text-9xl md:text-8xl sm:text-7xl text-6xl`}
            style={{ textAlign: "justify", fontStretch: "200%" }}
          >
            ship it
          </h1> */}
          </div>
          <ImageList />
          {/* <div className="flex pb-8 mt-[-32px]">
            <div className="m-4 border-dashed border-2 border-slate-500 min-w-[267]">
              <div>
                <Image
                  src="/ship.png"
                  alt="Ship it!"
                  width={267}
                  height={1}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="p-8 border-dashed border-t-2 border-slate-500"
                style={{ maxWidth: "267px" }}
              >
                <p className="text-xs">
                  Designed Guide on how to transform apps using AI/ML powered
                  frameworks.
                </p>
              </div>
            </div>
            <div className="m-4 border-dashed border-2 border-slate-500 min-w-[267]">
              <div>
                <Image
                  src="/ship.png"
                  alt="Ship it!"
                  width={267}
                  height={1}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="p-8 border-dashed border-t-2 border-slate-500"
                style={{ maxWidth: "267px" }}
              >
                <p className="text-xs">
                  Designed Guide on how to transform apps using AI/ML powered
                  frameworks.
                </p>
              </div>
            </div>
            <div className="m-4 border-dashed border-2 border-slate-500 min-w-[267]">
              <div>
                <Image
                  src="/ship.png"
                  alt="Ship it!"
                  width={267}
                  height={1}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="p-8 border-dashed border-t-2 border-slate-500"
                style={{ maxWidth: "267px" }}
              >
                <p className="text-xs">
                  Designed Guide on how to transform apps using AI/ML powered
                  frameworks.
                </p>
              </div>
            </div>
            <div className="m-4 border-dashed border-2 border-slate-500 min-w-[267]">
              <div>
                <Image
                  src="/ship.png"
                  alt="Ship it!"
                  width={267}
                  height={1}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="p-8 border-dashed border-t-2 border-slate-500"
                style={{ maxWidth: "267px" }}
              >
                <p className="text-xs">
                  Designed Guide on how to transform apps using AI/ML powered
                  frameworks.
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <h2 className={`${plus_jakarta_sans.className} text-4xl text-left `}>
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
