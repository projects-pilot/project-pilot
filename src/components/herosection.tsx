
"use client";
import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";


export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden flex items-center justify-center "
        >

            <div className="relative z-10 flex flex-col items-center text-center px-4">


                <h1 className="text-4xl sm:text-6xl font-bold">Your Ideas</h1>
                <div className="h-2 sm:h-3" />
                <PointerHighlight
                    rectangleClassName="border-blue-500 dark:border-blue-400 rounded-md"
                    pointerClassName="text-blue-500 dark:text-blue-400"
                >
                    <span className="text-4xl sm:text-6xl font-bold text-blue-600 dark:text-blue-300">
                        Our Guidance
                    </span>
                </PointerHighlight>


                <p className="mt-6 text-lg sm:text-xl max-w-xl">
                    We help bring your innovations to life with expert support and direction.
                </p>
            </div>
        </section>
    );
}


