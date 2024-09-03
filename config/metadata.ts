import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const siteMetadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `${siteConfig.name} - %s`,
    },
    description: siteConfig.description,
    keywords:
        "web development, programming, coding, technology, tutorials, JavaScript, React, Next.js",
    generator: "Next.js, React, GSAP",
    openGraph: {
        title: siteConfig.title,
        type: "website",
        description: siteConfig.description,
        siteName: siteConfig.name,
        url: siteConfig.url,
        images: [
            {
                url: `${siteConfig.url}/og-image.png`,
                width: 600,
                height: 600,
                alt: `${siteConfig.name} Open Graph Image`,
            },
        ],
        locale: "en_US",
        countryName: "India",
    },
    twitter: {
        title: siteConfig.title,
        site: siteConfig.twitter,
        description: siteConfig.description,
        card: "summary_large_image",
        images: [
            {
                url: `${siteConfig.url}/og-image.png`,
                alt: `${siteConfig.name} Twitter Card Image`,
            },
        ],
    },
    category: "Technology, Education, Web Development",
    robots: "index, follow",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
    authors: {
        name: "Nishant Chhillar",
        url: siteConfig.url,
    },
    publisher: "Nishant Chhillar",
    alternates: {
        canonical: siteConfig.url,
    },
};
