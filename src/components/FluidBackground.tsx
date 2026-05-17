"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const FluidScene = dynamic(() => import("./FluidScene"), {
    ssr: false,
});

export default function FluidBackground() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fluid-bg${visible ? " fluid-bg--visible" : ""}`} aria-hidden="true">
            <FluidScene />
        </div>
    );
}
