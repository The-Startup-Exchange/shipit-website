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
  const places = ["Columbia University", "CalTech", "New York University", "Georgia Tech", "Georgia State", "University of Michigan", "University of Illinois Urbana-Champaign", "Duke University", "Parsons School of Design", "Fashion Institute of Technology", "Barnard College", "Virginia Tech", "Michigan State University", "Babson College"];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImgIndex(randomIndex);

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
          <div className="flex w-full md:px-12 px-2 justify-start">
            <Image src={images[imgIndex]} alt="ship it" layout="responsive" width={100} height={100} />
          </div>
          <div className="flex flex-col w-full items-center pt-4">
            <Link href="https://www.instagram.com/myfroggystuff/">
              <p className={`${plus_jakarta_sans_regular_italic.className} text-[#d1d1d1] text-[16px]`}>artwork by Bella (@myfroggystuff)</p>
            </Link>
          </div>
          <div className={`${crimson_regular.className} w-full md:space-y-40 space-y-20`}>
            <div className="flex flex-col align-center px-8 py-12 items-center">
              <p className={`${crimson_regular.className} md:pt-0 pt-20 md:pb-4 pb-6 md:text-start text-center leading-[120%] text-[42px]`}>a space to forget about class & hw and &quot;ship&quot; your next idea.</p>
              <div className="md:space-x-6 space-y-6 md:space-y-0">
                <Button variant="secondary" className="flex-col items-center md:w-[150px] w-full md:px-0 px-20 py-10 space-y-1.5">
                  <h1 className={` text-[24px] leading-[100%] tracking-tighter ${plus_jakarta_sans_thin.className}`}>attend</h1>
                </Button>
                <Button href="https://airtable.com/appIL9IqHDejLtfIJ/pagZTNq7G0LqLUaLL/form" variant="outline" className={`flex-col items-center hover:text-white md:w-[150px] w-full md:px-0 px-20 py-10 space-y-1.5`}>
                  <h1 className={`text-[24px] leading-[100%] tracking-tighter  ${plus_jakarta_sans_thin.className}`}>host</h1>
                </Button>
              </div>
            </div>
            <div className="md:px-80 px-7 text-center space-y-4 text-[18px]">
              <Image
                  src="/boxes.png"
                  alt="Boxes"
                  height={100}
                  width={100}
                  className="absolute left-20 top-300 mt-20 rotate-12 pt-48 md:w-[10%] w-[0%]"
                />
              <div className={`flex flex-col space-y-2 z-10`}>
                <h1 className={`md:text-[68px] text-[52px] leading-[100%] ${plus_jakarta_sans_bold.className}`}>ideas that excite you</h1>
                <h1 className={`md:text-[72px] text-[56px] leading-[100%] ${plus_jakarta_sans_extrabold.className}`}>are worth pursuing.</h1>
              </div>
              <div className="md:px-20 px-4 py-10 space-y-8">
                <p className={`${plus_jakarta_sans_thin.className} text-start`}>&quot;ship-it&quot; is a weekly co-working session that brings together student makers, builders, and creators to work on their ideas.</p>
                <p className={`${plus_jakarta_sans_regular_italic.className} text-start`}>​​to &quot;ship&quot; is to deliver progress, ​to deliver new features, or to get your work in front of people.</p>
                <p className={`${plus_jakarta_sans_thin.className} text-start`}>​the most talented creatives and builders often don&apos;t get enough time and support to work on their own ideas. we exist to create a space where they can do so, every week.</p>
              </div>
            </div>
            <div>
              <div className="flex w-full md:px-48 px-4 justify-start pb-12">
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
            <div className="w-full md:px-28 px-7 py-28 md:text-center items-center align-center justify-center space-y-12">
              <Image
                  src="/hammer.png"
                  alt="Hammer"
                  height={100}
                  width={100}
                  className="absolute right-20 top-200 pt-0 md:w-[10%] w-[0%]"
                />
              <div className={`flex flex-col space-y-2 z-10`}>
                <h1 className={`md:text-[68px] text-[56px] leading-[100%] text-center ${plus_jakarta_sans_bold.className}`}>what does this look like?</h1>
              </div>
              <div className="md:px-72 px-4 text-start space-y-8">
                <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>each session is 2-3 hours, with 50-60 min. focused work sessions.</p>
                <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>​​​​​​the project you work on can be anything! <span className={`${plus_jakarta_sans_thin_italic.className}`}>​​​​ex. coding an app, recording podcasts, CADing, making beats, painting custom shoes, etc.</span></p>
                <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>​the only rule is that you can&apos;t do hw...</p>
                <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>​​​​​​at the end, we&apos;ll have 2 minute demos for people to talk about what they worked on — completely optional, so no pressure!</p>
              </div>
            </div>
            <div className="w-full md:px-28 px-7 py-28 md:text-center items-center align-center justify-center space-y-12">
              <div className={`flex flex-col space-y-2 z-10`}>
                <h1 className={`md:text-[68px] text-center text-[56px] w-full leading-[100%] ${plus_jakarta_sans_bold.className}`}>do i need experience?</h1>
              </div>
              <div className="md:px-72 px-4 text-start space-y-8">
                <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>nope! all levels of experience are welcome. your starting point does not matter.</p>
                <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>​​to become creative, you need to create. ship-it is the place to start, to be inspired, and regain your childlike imagination and drive for making things & sharing them with friends.</p>
                <p className={`${plus_jakarta_sans_thin.className} text-[18px]`}>we know you&apos;ve got ideas. and dreams. passions. dont let them die as school picks up.</p>
                <p className={`${plus_jakarta_sans_bold.className} text-[18px]`}>welcome to ship-it!</p>
              </div>
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
            <div className={`flex flex-col md:pl-12 md:px-0 px-2 py-28 mt-16 justify-center align-center items-center z-10 md:w-[50%] w-[100%]`}>
              <Image
                    src="/buildYourIdeas.png"
                    alt="ship it"
                    layout="responsive" 
                    width={100} 
                    height={100}
                />
            </div>
          </div>
              <div className="w-full flex flex-row align-center items-center md:space-x-8 space-x-2 pt-12">
                  <div className="flex md:w-[1/3] w-[30%] h-[100%] md:pt-28 pt-10 justify-start">
                      <Image src="/constructionBarThin.png" alt="ship it" layout="responsive" width={100} height={100} />
                  </div>
                  <Link href="https://airtable.com/appIL9IqHDejLtfIJ/pagZTNq7G0LqLUaLL/form" className="relative flex w-full justify-start">
                    <div
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      className="relative w-full"
                    >
                      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${hover ? 'opacity-0' : 'opacity-100'}`}>
                        <Image
                          src="/bringToYourCampus.png"
                          alt="ship it"
                          layout="responsive"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${hover ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                          src="/bringToYourCampusHover.png"
                          alt="ship it"
                          layout="responsive"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="flex md:w-[1/3] w-[30%] h-[100%] md:pt-28 pt-10 justify-start">
                        <Image src="/constructionBarThin.png" alt="ship it" layout="responsive" width={100} height={100} />
                  </div>
                </div>
            </div>
        <div className="flex flex-col pt-16 items-center">
          <div className="w-full flex justify-center z-20">
          </div>
          {/* <ImageList demos={demos} /> */}
        </div>
      </main>
      <div className="flex w-full item-start bg-white">
        <Image src="/constructionBar.png" alt="ship it" layout="responsive" width={100} height={100} />
      </div>
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
