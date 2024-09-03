import { siteConfig } from "@/config/site";
import Link from "next/link";
import { WiMoonWaningCrescent6 } from "react-icons/wi";

export default function GlobalHeading() {
    return (
        <Link href="/" className="flex items-center">
            <div className="flex items-center mr-2">
                <WiMoonWaningCrescent6 className="lg:text-4xl text-3xl" />
                <p className="lg:text-xl lg:ml-[-26px] ml-[-18px] font-['Lato'] font-extrabold">
                    {"</>"}
                </p>
            </div>
            <span className="lg:text-xl text-lg font-semibold text-nowrap">{siteConfig.name}</span>
        </Link>
    );
}
