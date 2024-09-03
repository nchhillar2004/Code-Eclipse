export const siteConfig = {
    name: "Code Eclipse",
    title: "Code Eclipse - Learn, Share & Connect",
    description: "Master new tech in a world that's always evolving.",
    url:
        process.env.NODE_ENV === "production"
            ? "https://code-eclipse.vercel.app/"
            : "http://localhost:3000",
    twitter: "@nchhillar01",
    links: {
        github: "https://github.com/nchhillar2004/Code-Eclipse/",
        discord: "https://discord.com/",
        youtube: "https://youtube.com/@CodeEclipseOfficial",
    },
};
