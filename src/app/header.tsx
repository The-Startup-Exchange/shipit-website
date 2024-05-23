"use client";

import { Button } from "@/components/ui/button";
import { 
  messina_light, 
  plus_jakarta_sans_extrabold,
  crimson_regular
} from "./fonts";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../core/icon";

export default function Header() {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const currentDay = now.getDay();
  
        if (currentDay >= 5 && currentDay <= 0) {
          setCountdown("Enjoy the weekend + spend some time on ur project!");
        } else {
          const friday = new Date(now);
          friday.setDate(now.getDate() + (5 - currentDay + 7) % 7);
          friday.setHours(0, 0, 0, 0);
  
          const diff = friday.getTime() - now.getTime();
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
  
          setCountdown(
            `${days.toString().padStart(2, "0")} D ${hours
              .toString()
              .padStart(2, "0")} H ${minutes
              .toString()
              .padStart(2, "0")} M ${seconds.toString().padStart(2, "0")} S until the weekend (aka more time to create)`
          );
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <header className="w-full text-black bg-white">
            <div className="flex flex-col justify-between items-center">
              <div className="flex w-full item-start">
                    <Image src="/constructionBarThin.png" alt="ship it" layout="responsive" width={100} height={100} />
              </div>
              <div className="flex md:flex-row flex-col md:pt-6 pt-3 items-center md:px-8 px-2 w-full justify-between">
                <Link href="http://startup.exchange">
                  <div className="sxgt">
                    <p className={`text-[18px] ${plus_jakarta_sans_extrabold.className} hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFCBA2] hover:to-[#D895B7] transition duration-500`}>ship-it🚢</p>
                  </div>
                </Link>
                <p className={`${crimson_regular.className} text-[16px] tracking-tighter`}>{countdown}</p>
                {/* <Link href="https://groupme.com/join_group/74807389/3z3z3z3z">
                  <Button
                    variant="outline" 
                  >
                    <div className={`${messina_light.className}`}>
                      JOIN GROUPME
                    </div>
                  </Button>
                </Link> */}
              </div>
            </div>
        </header>
      </>
    );
}