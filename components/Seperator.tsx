import React from "react";

export default function Seperator({ className }: { className?: string }) {
    return <div className={`h-[1px] w-full bg-zinc-600 ${className}`}></div>;
}
