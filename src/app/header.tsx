"use client";

import { drukWide, plus_jakarta_sans } from "./fonts";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
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
                  <NextImage 
                    src="/startupExchange.png"
                    height="48" width="170"
                    alt="Sellraze Logo"
                  />
                </NextLink>

              </nav>
              <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                <a className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300 mr-6" href="#">
                  JOIN DISCORD
                </a>
                <a
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700"
                  href="#"
                >
                  BRING THIS TO YOUR CAMPUS
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}