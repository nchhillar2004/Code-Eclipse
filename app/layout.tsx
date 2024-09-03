import { Inter } from "next/font/google";
import { siteMetadata } from "@/config/metadata";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/typo.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = siteMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning>
                <div className="__next relative">
                    <Navbar />
                    <main className="__codeEclipse min-h-[100vh]" role="main">
                        {children}
                    </main>
                    {/* <Footer /> */}
                </div>
            </body>
        </html>
    );
}
