import Image from "next/image";
import { drukWide, plus_jakarta_sans } from "./fonts";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <>
      <div className="absolute p-4 right-0">
        <ModeToggle />
      </div>
      <main className="min-h-screen w-screen px-16">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center">
            <svg viewBox="0 0 68 18" className="fill-primary">
              <text x="0" y="15" className={`${drukWide.className} `}>
                ship it
              </text>
            </svg>
            {/* <h1
            className={`${drukWide.className} xl:text-10xl lg:text-9xl md:text-8xl sm:text-7xl text-6xl`}
            style={{ textAlign: "justify", fontStretch: "200%" }}
          >
            ship it
          </h1> */}
          </div>
          <div className="flex">
            <div className="m-4 border-dashed border-2 border-slate-500">
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
            <div className="m-4 border-dashed border-2 border-slate-500">
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
            <div className="m-4 border-dashed border-2 border-slate-500">
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
          </div>
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
