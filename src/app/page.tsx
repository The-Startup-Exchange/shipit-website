"use client";

import React, { useState, useEffect } from 'react';
import {
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold, 
  plus_jakarta_sans_thin,
  crimson_regular, 
  plus_jakarta_sans_medium
} from "./fonts";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import ImageList from "@/components/imageList";
import Image from "next/image";
import Header from "./header";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
export const dynamic = "force-dynamic";

export default function Home() {
  const [hover, setHover] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [demos, setDemos] = useState([]);
  const images = ["/shipIt2.png", "/shipIt1.png", "/shipIt3.png"];
  const nextImage = () => {
    setImgIndex((current) => (current + 1) % images.length);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setDemos(projects);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Header />
      <main className="w-full py-12 md:py-24 bg-[#FFFEF9] text-black">
        <div className="flex flex-col space-y-4">
          <div
            className="w-full px-12 space-y-7">
            <Link href="#" onClick={nextImage} className="flex w-full justify-start">
              <Image src={images[imgIndex]} alt="ship it" layout="responsive" width={100} height={100} />
            </Link>
            {/* <span className={`${drukWide.className} dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-500 fill-primary ship-it`}>
              ship it
            </span> */}
            <div className={`${crimson_regular.className} py-12 text-center`}>
              <p className={`${crimson_regular.className} text-[42px]`}>a space to forget about class & hw and &quot;ship&quot; your next idea.</p>
              <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>​​​​to &quot;ship&quot; is to deliver progress, ​to deliver new features, or to get your work in front of people.</p>
            </div>
            {/* <div className={`${messina_light.className} mx-auto space-x-2`}>
              <NextLink href="https://groupme.com/join_group/74807389/3z3z3z3z">
                <Button
                  variant="outline" 
                >
                  <div className={`${messina_light.className}`}>
                    JOIN GROUPME
                  </div>
                </Button>
              </NextLink>
              <NextLink href="https://tinyurl.com/startupexchangegt">
                <Button>
                  <div className={`${messina_light.className}`}>
                    ATTEND
                  </div>
                </Button>
              </NextLink>
            </div> */}
        </div>
        <div className="w-full px-28 py-28 text-center items-center align-center justify-center space-y-12">
          <div className={`flex flex-col space-y-2 z-10`}>
            <h1 className={`text-[68px] leading-[100%] ${plus_jakarta_sans_bold.className}`}>ideas that excite you</h1>
            <h1 className={`text-[72px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>are worth pursuing.</h1>
          </div>
          <div className="px-48">
            <p className={`${plus_jakarta_sans_thin.className} text-[21px]`}>​the most talented creatives and builders often don&apos;t get enough time and support to work on their own ideas. we exist to create a space where they can do so, every week.</p>
          </div>
        </div>
        <div className="relative flex flex-col w-full">
            <div className={`absolute inset-0 z-0`}>
              <Image
                  src="/truckSketch.png"
                  alt="ship it"
                  layout="fill"
                  objectFit="cover"
              />
            </div>
            <div className={`flex flex-col pl-12 py-28 mt-16 justify-center align-center items-center z-10 w-[50%]`}>
              <Image
                    src="/buildYourIdeas.png"
                    alt="ship it"
                    layout="responsive" 
                    width={100} 
                    height={100}
                />
            </div>
          </div>
              <div className="w-full flex flex-row align-center items-center space-x-8 pt-12">
                  <div className="flex w-[1/3] h-[100%] pt-14 justify-start">
                      <Image src="/constructionBarThin.png" alt="ship it" layout="responsive" width={100} height={100} />
                  </div>
                  <Link href="https://groupme.com/join_group/74807389/3z3z3z3z" className="relative flex w-full justify-start">
                    <div
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      className="relative w-full"
                    >
                      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${hover ? 'opacity-0' : 'opacity-100'}`}>
                        <Image
                          src="/joinGroupMe.png"
                          alt="ship it"
                          layout="responsive"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${hover ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                          src="/joinGroupMeHover.png"
                          alt="ship it"
                          layout="responsive"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="flex w-[1/3] h-[100%] pt-14 justify-start">
                        <Image src="/constructionBarThin.png" alt="ship it" layout="responsive" width={100} height={100} />
                  </div>
                </div>
            </div>
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center z-20">

          </div>
          <ImageList demos={demos} />
        </div>

      </main>
    </>
  );
}

async function getProjects() {
  // const supabase = createClient('https://wrlispjjwzomjvomdrbm.supabase.co', "")

  const res = await fetch(
    "https://api.airtable.com/v0/applTePF0yE2evQhL/Projects%20(for%20website)",
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  const recs = Promise.all(
    data["records"].map(async (record: any) => {
      const id = record["id"];
      const oneLiner = record.fields["One-liner"];
      const name = record.fields["Name"];
      const image = record.fields["Media"][0]["url"];
      const response = await fetch(image);
      let blob = await response.blob();
      let buffer = Buffer.from(await blob.arrayBuffer());
      const base64url =
        "data:" + blob.type + ";base64," + buffer.toString("base64");
      return { id, oneLiner, name, base64url };
    })
  );

  return recs;
}
