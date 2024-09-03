"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { services, resources, courses } from "@/data/dropdown";
import Seperator from "@/components/Seperator";
import { siteConfig } from "@/config/site";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function NavbarMenu({
    onDropdownChange,
}: {
    onDropdownChange: (isOpen: boolean) => void;
}) {
    const [dropdown, setDropdown] = useState<string | null>(null);

    function handleDropdown(option: string) {
        const newDropdown = dropdown === option ? null : option;
        setDropdown(newDropdown);
        onDropdownChange(!!newDropdown);
    }

    return (
        <>
            <li className="menu-item-holder lg:hover:underline h-full">
                <div className="sticky lg:h-full">
                    <button
                        className={`flex h-full items-center border-b-2 border-b-transparent ${
                            dropdown === "services" && "lg:border-b-white"
                        }`}
                        onClick={() => handleDropdown("services")}
                    >
                        Services
                        {dropdown === "services" ? (
                            <FaAngleUp className="ml-2" />
                        ) : (
                            <FaAngleDown className="ml-2" />
                        )}
                    </button>
                </div>
                {dropdown === "services" && (
                    <div className="lg:absolute overflow-hidden left-0 w-full bg-[var(--blue)] courses">
                        <Seperator />
                        <div className="container max-h-[10000px] max-lg:h-[50vh] max-lg:overflow-y-scroll">
                            <nav>
                                <ul className="flex flex-wrap">
                                    {services.map((service) => (
                                        <li key={service.id} className="m-5">
                                            <Link
                                                href={service.url}
                                                className="flex flex-col group"
                                            >
                                                <p className="font-medium flex items-center">
                                                    <span className="text-xl mr-2">
                                                        {service.icon}
                                                    </span>
                                                    {service.title}
                                                    <FaArrowRight
                                                        size={14}
                                                        className="ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                    />
                                                </p>

                                                <small className="text-zinc-300 hover:text-zinc-100 transition-[0.4s]">
                                                    {service.description}
                                                </small>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </li>

            <li className="sticky lg:hover:underline h-full">
                <Link href="/blog" className="h-full flex items-center">
                    Blog
                </Link>
            </li>

            <li className="lg:hover:underline h-full">
                <div className="sticky lg:h-full">
                    <button
                        className={`flex h-full items-center border-b-2 border-b-transparent ${
                            dropdown === "resources" && "lg:border-b-white"
                        }`}
                        onClick={() => handleDropdown("resources")}
                    >
                        Resources
                        {dropdown === "resources" ? (
                            <FaAngleUp className="ml-2" />
                        ) : (
                            <FaAngleDown className="ml-2" />
                        )}
                    </button>
                </div>
                {dropdown === "resources" && (
                    <div className="lg:absolute overflow-hidden left-0 w-full bg-[var(--blue)] resources">
                        <Seperator />
                        <div className="container max-h-[10000px] max-lg:h-[50vh] max-lg:overflow-y-scroll flex flex-wrap justify-around">
                            {resources.map((resource) => (
                                <nav key={resource.id} className="m-5">
                                    <b className="text-xl flex items-center">
                                        <span className="mr-2">
                                            {resource.icon}
                                        </span>
                                        {resource.title}
                                    </b>
                                    <Seperator className="my-3" />
                                    <ul>
                                        {resource.links.map((link) => (
                                            <li
                                                key={link.title}
                                                className="mb-4"
                                            >
                                                <Link
                                                    href={link.url}
                                                    className="flex flex-col group"
                                                >
                                                    <span className="font-medium flex items-center">
                                                        {link.title}
                                                        <FaArrowRight
                                                            size={14}
                                                            className="ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                        />
                                                    </span>
                                                    <small className="text-zinc-300 hover:text-zinc-100 transition-[0.4s]">
                                                        {link.description}
                                                    </small>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            ))}

                            <div className="notice bg-zinc-800 px-10 mx-5 py-4">
                                <b className="text-xl">External resources</b>
                                <Seperator className="my-3" />
                                <ul>
                                    <li className="mb-4">
                                        <Link
                                            href={siteConfig.links.github}
                                            className="flex items-center"
                                        >
                                            <span className="font-medium mr-2">
                                                GitHub
                                            </span>
                                            <FaGithub />
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href={siteConfig.links.discord}
                                            className="flex items-center"
                                        >
                                            <span className="font-medium mr-2">
                                                Discord
                                            </span>
                                            <FaDiscord />
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            href={siteConfig.links.youtube}
                                            className="flex items-center"
                                        >
                                            <span className="font-medium mr-2">
                                                YouTube
                                            </span>
                                            <FaYoutube />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </li>

            <li className="lg:hover:underline h-full">
                <div className="sticky lg:h-full">
                    <button
                        className={`flex h-full items-center border-b-2 border-b-transparent ${
                            dropdown === "courses" && "lg:border-b-white"
                        }`}
                        onClick={() => handleDropdown("courses")}
                    >
                        Courses
                        {dropdown === "courses" ? (
                            <FaAngleUp className="ml-2" />
                        ) : (
                            <FaAngleDown className="ml-2" />
                        )}
                    </button>
                </div>
                {dropdown === "courses" && (
                    <div className="lg:absolute overflow-hidden left-0 w-full bg-[var(--blue)] courses">
                        <Seperator />
                        <div className="container max-h-[10000px] max-lg:h-[50vh] max-lg:overflow-y-scroll flex flex-wrap justify-between">
                            {courses.map((course) => (
                                <nav key={course.id} className="m-5">
                                    <b className="flex items-center text-xl">
                                        <span className="mr-2">
                                            {course.icon}
                                        </span>
                                        {course.title}
                                    </b>
                                    <Seperator className="my-3" />
                                    <ul>
                                        {course.links.map((link) => (
                                            <li
                                                key={link.title}
                                                className="mb-4"
                                            >
                                                <Link
                                                    href={link.url}
                                                    className="flex flex-col group"
                                                >
                                                    <span className="font-medium flex items-center">
                                                        {link.title}
                                                        <FaArrowRight
                                                            size={14}
                                                            className="ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                        />
                                                    </span>
                                                    <small className="text-zinc-300 hover:text-zinc-100 transition-[0.4s]">
                                                        {link.description}
                                                    </small>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            ))}
                        </div>
                    </div>
                )}
            </li>
        </>
    );
}
