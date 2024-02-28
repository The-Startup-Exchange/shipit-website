"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { messina_mono_sans } from "./fonts";
import { useRef } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
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
        <span className="fixed-header-spacer"></span>
        <header className="w-full text-white">
          <div className="mx-auto">
            <div className="flex justify-between px-4 sm:px-6 lg:px-8 items-center border-b-2 border-gray-800 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <ModeToggle/>
              </div>
              <nav className="md:flex space-x-10">
                <NextLink href="http://startup.exchange">
                  <div className="sxgt">
                    <NextImage 
                      src="/SXGT.png"
                      height="48" width="170"
                      alt="SXGT Logo"
                    />
                  </div>
                </NextLink>

              </nav>
              <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                <NextLink href="https://groupme.com/join_group/74807389/3z3z3z3z">
                  <Button
                    variant="outline" 
                  >
                    <div className={`${messina_mono_sans.className}`}>
                      JOIN GROUPME
                    </div>
                  </Button>
                </NextLink>

              </div>
            </div>
          </div>
        </header>
      </>
    );
}