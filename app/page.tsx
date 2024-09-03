import { siteConfig } from "@/config/site";
import Link from "next/link";
import CapsHeading from "@/components/CapsHeading";
import Image from "next/image";

export default function HomePage() {
    return (
        <div className="home">
            <section className="relative bg-black">
                <video
                    preload="none"
                    loop
                    autoPlay
                    muted
                    className="min-h-[100vh] opacity-50 bg-black object-cover"
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <div className="absolute w-fit top-1/3">
                        <div className="h-full flex flex-col">
                            <h1 className="text-white lg:w-1/2">
                                {siteConfig.name}: {siteConfig.description}
                            </h1>
                            <p></p>
                        </div>
                    </div>
                    <div className="absolute bottom-[20%]">
                        <Link
                            href="/"
                            className="ce-btn hover:bg-transparent hover:text-white"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-24 max-lg:justify-between flex lg:flex-row flex-col">
                    <div className="flex items-center justify-center lg:w-2/5">
                        <Image
                            src="/tech.png"
                            height={400}
                            width={400}
                            alt="Technologies"
                            className="h-full w-auto select-none"
                            priority
                        />
                    </div>
                    <div className="content lg:w-3/5 lg:ml-16">
                        <h2>
                            Discover the best tech courses from our handpicked
                            selection
                            {" — "}
                            <span className="bg-gradient-to-r from-blue-50 to-indigo-200">
                                premium courses, free for everyone.
                            </span>
                        </h2>
                        <div className="data flex justify-between lg:justify-around lg:mt-24 mt-16">
                            <div className="flex flex-col space-y-10">
                                <blockquote className="flex space-x-4">
                                    <div className="h-full !w-1 bg-gradient-to-b from-cyan-400 to-green-400 rounded-full"></div>
                                    <div className="right">
                                        <h2>50+</h2>
                                        <p>latest courses</p>
                                    </div>
                                </blockquote>
                                <blockquote className="flex space-x-4">
                                    <div className="h-full !w-1 bg-gradient-to-b from-cyan-400 to-green-400 rounded-full"></div>
                                    <div className="right">
                                        <h2>300+</h2>
                                        <p>subscribers on youtube</p>
                                    </div>
                                </blockquote>
                            </div>
                            <div className="flex flex-col space-y-10">
                                <blockquote className="flex space-x-4">
                                    <div className="h-full !w-1 bg-gradient-to-b from-cyan-400 to-green-400 rounded-full"></div>
                                    <div className="right">
                                        <h2>100%</h2>
                                        <p>free access to premium content</p>
                                    </div>
                                </blockquote>
                                <blockquote className="flex space-x-4">
                                    <div className="h-full !w-1 bg-gradient-to-b from-cyan-400 to-green-400 rounded-full"></div>
                                    <div className="right">
                                        <h2>24/7</h2>
                                        <p>help & support</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-100">
                <div className="container py-24">
                    <CapsHeading title="Approach" />
                    <h1>
                        You&apos;re not looking for the ordinary, you&apos;re
                        looking for <span>{siteConfig.name}</span>
                    </h1>
                </div>
            </section>
            <section>
                <div className="container py-24">
                    <div className="flex lg:flex-row flex-col max-lg:space-y-4">
                        <div className="left">
                            <CapsHeading title="Select your desired course and start learning" />
                            <h1>Courses</h1>
                        </div>
                        <div className="right">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Optio et ducimus, autem mollitia accusantium
                            aliquid suscipit cum id eaque non!
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-100">
                <div className="container py-24">
                    <CapsHeading title="Explore our blog" />
                    <h1>Explore Blog</h1>
                </div>
            </section>
            <section>
                <div className="container py-24">
                    <CapsHeading title="Explore our services" />
                    <h1>Services</h1>
                </div>
            </section>
            <section className="bg-slate-100" id="contact">
                {/* <ContactSection /> */}
            </section>
            <section className="bg-gradient-to-br from-cyan-300 to-green-500">
                <div className="container py-16 text-center w-full">
                    <h1>Grow your business</h1>
                    <p>
                        Grow your business with our expert services. Whether you
                        need a website, app, or digital solution, we&apos;re
                        here to help you succeed and reach new heights.
                    </p>

                    <Link
                        href="#contact"
                        className="bg-[var(--blue)] rounded-full py-4 px-8 w-fit text-white"
                    >
                        Contact now
                    </Link>
                </div>
            </section>
        </div>
    );
}
