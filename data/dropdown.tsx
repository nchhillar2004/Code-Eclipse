import { ReactNode } from "react";
import { FaAppStore } from "react-icons/fa";
import {
    FaArrowTrendUp,
    FaCloud,
    FaCode,
    FaLaptopCode,
    FaRobot,
} from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";

interface Services {
    id: number;
    title: string;
    description: string;
    url: string;
    icon: ReactNode;
}
export const services: Services[] = [
    {
        id: 1,
        title: "Web Development Services",
        description: "Get your full stack website with latest technologies",
        url: "/services/web-development",
        icon: <FaCode />,
    },
    {
        id: 2,
        title: "App Development Services",
        description: "Get your Mobile app for Android and iOS.",
        url: "/services/app-development",
        icon: <FaAppStore />,
    },
    {
        id: 3,
        title: "UI/UX Design Services",
        description: "Professional UI/UX design services.",
        url: "/services/ui-ux-design",
        icon: <MdOutlineDesignServices />,
    },
    {
        id: 4,
        title: "Cloud & Hosting Solutions",
        description:
            "Reliable cloud and hosting solutions tailored for your needs.",
        url: "/services/cloud-hosting",
        icon: <FaCloud />,
    },
    {
        id: 5,
        title: "AI & Machine Learning",
        description: "Leverage AI and ML to transform your business processes.",
        url: "/services/ai-ml",
        icon: <FaRobot />,
    },
];

export const resources = [
    {
        id: 1,
        title: "Help and Support",
        icon: <IoIosHelpCircleOutline />,
        links: [
            {
                title: "Help and Support",
                description: "Get 24/7 support",
                url: "/help-support",
            },
            {
                title: "How-to Guides",
                description: "Read in-depth guides/docs.",
                url: "/guides",
            },
            {
                title: "Contact Us",
                description:
                    "Contact us and we&apos;ll reach you as soon as possible",
                url: "/contact",
            },
            {
                title: "Report/Feedback",
                description: "Help us improve",
                url: "/feedback",
            },
        ],
    },
    {
        id: 2,
        title: "Popular Topics",
        icon: <FaArrowTrendUp />,
        links: [
            {
                title: "What is Code Eclipse?",
                description: "How our website works",
                url: "blogs/what-is-code-eclipse",
            },
            {
                title: "Why Code Eclipse?",
                description:
                    "Why use our platform when so many famous alternatives exist.",
                url: "blogs/why-code-eclipse",
            },
            {
                title: "About Us",
                description: "All about Code Eclipse",
                url: "/about",
            },
            {
                title: "Sitemap",
                description: "Code Eclipse sitemap",
                url: "/sitemap.xml",
            },
        ],
    },
];

export const courses = [
    {
        id: 1,
        title: "Web Development",
        icon: <FaCode />,
        links: [
            {
                title: "Full Stack",
                description: "Full stack web development",
                url: "/courses/full-stack",
            },
            {
                title: "Frontend Development",
                description: "Frontend technologies - React.js, Vue.js",
                url: "/courses/frontend",
            },
            {
                title: "Backend Development",
                description: "Backend - Java, Python, Ruby on Rails",
                url: "/courses/backend",
            },
            {
                title: "UI/UX Design",
                description: "User-interface and user-experience design",
                url: "/courses/ui-ux",
            },
            {
                title: "Cloud/Hosting",
                description: "Amazon Web Services, GitHub",
                url: "/courses/cloud-hosting",
            },
        ],
    },
    {
        id: 2,
        title: "App Development",
        icon: <FaAppStore />,
        links: [
            {
                title: "Android Development",
                description: "Java, Kotlin",
                url: "/courses/android-development",
            },
            {
                title: "iOS Development",
                description: "Swift, Objective-C",
                url: "/courses/ios-development",
            },
            {
                title: "Native Development",
                description: "Flutter, React Native",
                url: "/courses/native-development",
            },
            {
                title: "UI/UX Design",
                description: "User-interface and user-experience design",
                url: "/courses/ui-ux",
            },
            {
                title: "Cloud/Hosting",
                description: "Amazon Web Services, GitHub",
                url: "/courses/cloud-hosting",
            },
        ],
    },
    {
        id: 3,
        title: "AI/ML",
        icon: <FaRobot />,
        links: [
            {
                title: "Artificial Intelligence",
                description: "Learn the fundamentals of AI",
                url: "/courses/ai",
            },
            {
                title: "Machine Learning",
                description: "Dive deep into machine learning",
                url: "/courses/ml",
            },
            {
                title: "Data Science",
                description: "Data science techniques and tools",
                url: "/courses/data-science",
            },
            {
                title: "Deep Learning",
                description: "Advanced deep learning concepts",
                url: "/courses/deep-learning",
            },
        ],
    },
    {
        id: 4,
        title: "Software Development",
        icon: <FaLaptopCode />,
        links: [
            {
                title: "Software Engineering",
                description: "Best practices in software engineering",
                url: "/courses/software-engineering",
            },
            {
                title: "DevOps",
                description: "Learn DevOps practices and tools",
                url: "/courses/devops",
            },
            {
                title: "Agile Development",
                description: "Master agile methodologies",
                url: "/courses/agile",
            },
            {
                title: "Version Control",
                description: "Learn version control systems like Git",
                url: "/courses/version-control",
            },
        ],
    },
];
