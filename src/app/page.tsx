"use client";

import React, { useState, useEffect } from 'react';
import {
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold, 
  plus_jakarta_sans_thin,
  crimson_regular, 
  plus_jakarta_sans_medium,
  plus_jakarta_sans_regular_italic,
  plus_jakarta_sans_thin_italic,
  crimson_regular_italic
} from "./fonts";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import Marquee from "react-fast-marquee";
import ImageList from "@/components/imageList";
import Image from "next/image";
import Header from "./header";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
export const dynamic = "force-dynamic";

interface Project {
  id: string;
  oneLiner: string;
  name: string;
  base64url: string;
}

export default function Home() {
  const [hover, setHover] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [demos, setDemos] = useState<Project[]>([]);
  const images = ["/shipIt2.png", "/shipIt1.png", "/shipIt3.png", "/shipIt4.png"];
  const shipIt = ["/nyc.jpg", "/gsu.jpeg", "/umich.gif", "/uiuc.jpeg"];
  const places = ["Columbia University", "CalTech", "New York University", "Georgia Tech", "Georgia State", "University of Michigan", "University of Illinois Urbana-Champaign", "Duke University", "Parsons School of Design", "Fashion Institute of Technology", "Virginia Tech", "Michigan State University", "Babson College"];
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
      <main className="w-full py-12 md:py-16 bg-[#FFFEF9] text-black">
        <div className="flex flex-col w-full space-y-4">
          <Link href="#" onClick={nextImage} className="flex w-full justify-start">
            <Image src={images[imgIndex]} alt="ship it" layout="responsive" width={100} height={100} />
          </Link>
          <div className="flex flex-col w-full items-center pt-4">
            <Link href="https://www.instagram.com/myfroggystuff/">
              <p className={`${plus_jakarta_sans_regular_italic.className} text-[#d1d1d1] text-[16px]`}>artwork by Bella (@myfroggystuff)</p>
            </Link>
          </div>
          <div className={`${crimson_regular.className} space-y-48`}>
            <div className="flex flex-col align-center py-12 items-center">
              <p className={`${crimson_regular.className} pb-4 text-start text-[42px]`}>a space to forget about class & hw and &quot;ship&quot; your next idea.</p>
              <div className="md:space-x-6 space-y-6 md:space-y-0">
                <Button variant="secondary" className="flex-col items-center md:w-[150px] w-[350px] py-10 space-y-1.5">
                  <h1 className={` text-[24px] leading-[100%] tracking-tighter ${plus_jakarta_sans_thin.className}`}>attend</h1>
                </Button>
                <Button variant="outline" className={`flex-col items-center hover:text-white md:w-[150px] w-[350px] py-10 space-y-1.5`}>
                  <h1 className={`text-[24px] leading-[100%] tracking-tighter  ${plus_jakarta_sans_thin.className}`}>host</h1>
                </Button>
              </div>
            </div>
            <div className="px-80 space-y-4 text-[18px]">
              <Image
                  src="/boxes.png"
                  alt="Boxes"
                  height={100}
                  width={100}
                  className="absolute left-20 top-300 mt-20 rotate-12 pt-48 w-[10%]"
                />
              <h1 className={`text-[68px] leading-[100%] text-center pb-12 ${plus_jakarta_sans_bold.className}`}>the &quot;what&quot; + why</h1>
              <p className={`${plus_jakarta_sans_regular_italic.className}`}>​​​​to &quot;ship&quot; is to deliver progress, ​to deliver new features, or to get your work in front of people.</p>
              <p className={`${plus_jakarta_sans_thin.className}`}>&quot;ship-it&quot; is a weekly co-working session that brings together student makers, builders, and creators to work on their ideas.</p>
              <p className={`${plus_jakarta_sans_thin.className}`}>​the most talented creatives and builders often don&apos;t get enough time and support to work on their own ideas. we exist to create a space where they can do so, every week.</p>
            </div>
            <div className="w-full px-28 py-28 text-center items-center align-center justify-center space-y-12">
            <Image
                src="/hammer.png"
                alt="Hammer"
                height={100}
                width={100}
                className="absolute right-20 top-200 pt-0 w-[10%]"
              />
              <div className={`flex flex-col space-y-2 z-10`}>
                <h1 className={`text-[68px] leading-[100%] ${plus_jakarta_sans_bold.className}`}>ideas that excite you</h1>
                <h1 className={`text-[72px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>are worth pursuing.</h1>
              </div>
              <div className="px-48">
                <p className={`${plus_jakarta_sans_thin.className} text-[21px]`}>we know you’ve got ideas. and dreams. passions. dont let them die as school picks up.</p>
              </div>
            </div>
            <div>
              <div className="flex w-full px-48 justify-start pb-12">
                <Image src='/thisSemester.png' alt="ship it" layout="responsive" width={100} height={100} />
              </div>
              <Marquee className="" speed={90} loop={0} direction="right">
                {([...places, ...places]).map((place, i) => (
                  <div key={i} className="flex flex-row">
                    <p className={`${crimson_regular.className} tracking-tighter`}>{' '}{place}</p><p className="px-2">•</p>
                  </div>
                ))}
              </Marquee>
              <Marquee className="" speed={65} loop={0} style={{ height: '375px', width: '100%' }}>
                {shipIt.map((img, i) => (
                  <div key={i} style={{ position: 'relative', height: '375px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={img}
                      alt="ship it"
                      layout="intrinsic"
                      width={600}
                      height={375}
                      objectFit="cover"
                      className="mr-6"
                    />
                  </div>
                ))}
              </Marquee>
              <Marquee className="" speed={90} loop={0} direction="left">
                {([...places, ...places]).map((place, i) => (
                  <div key={i} className="flex flex-row">
                    <p className={`${crimson_regular.className} tracking-tighter`}>{' '}{place}</p><p className="px-2">•</p>
                  </div>
                ))}
              </Marquee>
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
