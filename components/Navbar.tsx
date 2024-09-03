"use client";
import Link from "next/link";
import React from "react";
import NavbarMenu from "@/components/NavbarMenu";
import { useGSAP } from "@gsap/react";
import GlobalHeading from "@/components/GlobalHeading";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Navbar() {
    const container = React.useRef(null);
    const timeline = React.useRef<any>();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            start: "top -50",
            end: "bottom top",
            onEnter: () =>
                gsap.to(".header", {
                    backgroundColor: "#12151b",
                    color: "white",
                    duration: 0.4,
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                }),
            onLeaveBack: () =>
                gsap.to(".header", {
                    backgroundColor: "transparent",
                    duration: 0.4,
                    borderBottomColor: "transparent",
                }),
        });
    });

    return (
        <header
            className={`header ${
                menuOpen || dropdownOpen
                    ? "!bg-[var(--blue)]"
                    : "bg-transparent"
            } fixed top-0 z-20 text-white w-full ${menuOpen && "h-[100vh]"} ${
                dropdownOpen && "h-fit"
            }`}
        >
            <div className="container flex items-center justify-between h-16 space-x-5">
                <div className="global-heading flex mr-10">
                    <GlobalHeading />
                </div>
                <nav className="desktopMenu h-full flex-1 lg:block hidden">
                    <ul className="flex h-full space-x-5 items-center">
                        <NavbarMenu onDropdownChange={setDropdownOpen} />
                    </ul>
                </nav>
                <div className="flex space-x-5">
                    <Link href="/" className="underline">
                        Get Started
                    </Link>
                    <button
                        className="lg:hidden"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                    >
                        Menu
                    </button>
                </div>
            </div>
            <div
                className={`mobileMenu ${
                    menuOpen
                        ? "fixed w-full h-[100vh] bg-[var(--blue)]"
                        : "hidden"
                }`}
            >
                <nav className="container overflow-y-auto pt-10">
                    <ul className="space-y-10 font-semibold text-xl mb-8 sm:mb-10">
                        <NavbarMenu onDropdownChange={setDropdownOpen} />
                    </ul>
                </nav>
            </div>
        </header>
    );
}
