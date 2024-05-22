"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { messina_light, plus_jakarta_sans_extrabold } from "./fonts";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../core/icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <header className="w-full text-black bg-white">
            <div className="flex flex-col justify-between items-center">
              <div className="flex w-full item-start">
                    <Image src="/constructionBarThin.png" alt="ship it" layout="responsive" width={100} height={100} />
              </div>
              <div className="flex flex-row py-6 px-8 w-full justify-between">
                <Link href="http://startup.exchange">
                  <div className="sxgt">
                    <p className={`text-[18px] ${plus_jakarta_sans_extrabold.className}`}>ship-it🚢</p>
                    {/* <Image 
                      src="/SXGT.png"
                      height="48" width="170"
                      alt="SXGT Logo"
                    /> */}
                  </div>
                </Link>
                <Link href="https://groupme.com/join_group/74807389/3z3z3z3z">
                  <Button
                    variant="outline" 
                  >
                    <div className={`${messina_light.className}`}>
                      JOIN GROUPME
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
        </header>
      </>
    );
}