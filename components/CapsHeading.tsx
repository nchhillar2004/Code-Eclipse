import React from "react";

export default function CapsHeading({ title }: { title: string }) {
    return (
        <h4 className="text-lg pb-4 font-semibold text-blue-900 tracking-tighter leading-none uppercase">
            {title}
        </h4>
    );
}
