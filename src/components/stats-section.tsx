"use client"

import { NumberTicker } from "@/components/magicui/number-ticker"

export function StatsSection() {
    const stats = [
        {
            label: "Projects Completed",
            value: 100,
            suffix: "",
        },
        {
            label: "Interacted Students",
            value: 50,
            suffix: "+",
        },
        {
            label: "Availability",
            value: 24,
            suffix: "/7",
            isTime: true,
        },
    ]

    return (
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Premium glass-morphism container */}
                <div className="relative overflow-hidden rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-2xl">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10" />

                    {/* Content */}
                    <div className="relative z-10 p-8 sm:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {stats.map((stat, index) => (
                                <div key={stat.label} className="text-center group hover:scale-105 transition-transform duration-300">
                                    {/* Number Display */}
                                    <div className="mb-3">
                                        <div className="flex items-center justify-center gap-1">
                                            <NumberTicker
                                                value={stat.value}
                                                delay={index * 0.2}
                                                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                                            />
                                            {stat.suffix && (
                                                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                                    {stat.suffix}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <div className="space-y-1">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                            {stat.label}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-400/20 to-purple-400/20 rounded-full blur-3xl translate-x-16 translate-y-16" />
                </div>
            </div>
        </section>
    )
}
