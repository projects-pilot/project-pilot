
"use client"


import { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
// import { useTheme } from "next-themes";
import { useTheme } from "@/components/theme-provider";


import {
    PhoneIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    BriefcaseIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";


export default function Footer() {

    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null


    // footerdark.png

    return (
        <footer className="w-full bg-gradient-to-br from-[#0a0015] via-[#1a0033] via-[#2d1b69] to-[#0a0015] dark:from-gray-50 dark:via-white dark:to-gray-100 text-white dark:text-gray-800 shadow-2xl border-t border-purple-400/30 dark:border-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-6">
                {/* Mobile Layout - Image at top center */}
                <div className="block sm:hidden">
                    <div className="flex flex-col items-center mb-6">
                        <div className="mb-3">
                            <Image
                                src={theme === "dark" ? "/fotterlight.png" : "/footerdark.png"}
                                alt="Logo"
                                width={150}
                                height={80}
                                className="h-auto w-auto object-contain"
                                priority
                            />
                        </div>
                        <p className="text-purple-200 dark:text-gray-600 text-sm text-center mb-4">
                            Your ideas, our guidance
                        </p>
                    </div>

                    {/* Mobile Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-center space-x-2">
                                <EnvelopeIcon className="w-4 h-4 text-purple-300 dark:text-blue-500 flex-shrink-0" />
                                <a
                                    href="mailto:projectpilotngd@gmail.com"
                                    className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors text-sm"
                                >
                                    projectpilotngd@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <PhoneIcon className="w-4 h-4 text-purple-300 dark:text-blue-500 flex-shrink-0" />
                                <a
                                    href="tel:+919380888740"
                                    className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors text-sm"
                                >
                                    +91 6363209176
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-3 text-center">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#home"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <HomeIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#domain"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <GlobeAltIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                        <span>Domain</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#projects"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <BriefcaseIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                        <span>Projects</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <EnvelopeIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-3 text-center">Support</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#privacy"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#terms"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#help"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#faq"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Phone Numbers */}


                        {/* Copyright */}
                        <div className="mt-2 text-center">
                            <p className="text-purple-200 dark:text-gray-600 text-sm">
                                © {new Date().getFullYear()} Project Pilot. All rights reserved.
                            </p>
                            <p className="text-purple-300 dark:text-gray-500 text-xs mt-1">
                                Empowering innovation through expert guidance
                            </p>
                        </div>
                    </div>
                </div>


                <div className="hidden sm:block">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
                        <div className="flex flex-col items-center justify-between">

                            {/* Logo and tagline */}
                            <div className="flex flex-col items-center">
                                <div className="mb-3">
                                    <Image
                                        src={theme === "dark" ? "/fotterlight.png" : "/footerdark.png"}
                                        alt="Logo"
                                        width={65}
                                        height={65}
                                        className="h-auto w-auto object-contain"
                                        priority
                                    />
                                </div>
                                <p className="text-purple-200 dark:text-gray-600 text-sm mb-4 text-center">
                                    Your ideas, our guidance
                                </p>
                            </div>

                            {/* Contact Info - also centered below */}
                            <div className="space-y-2 flex flex-col items-center">
                                <div className="flex items-center space-x-2">
                                    <EnvelopeIcon className="w-4 h-4 text-purple-300 dark:text-blue-500 flex-shrink-0" />
                                    <a
                                        href="mailto:projectpilot@gmail.com"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors text-sm"
                                    >
                                        projectpilotngd@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PhoneIcon className="w-4 h-4 text-purple-300 dark:text-blue-500 flex-shrink-0" />
                                    <a
                                        href="tel:+919380888740"
                                        className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors text-sm"
                                    >
                                        +91 6363209176
                                    </a>
                                </div>
                            </div>

                        </div>


                        {/* Navigation Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-4">
                            <div>
                                <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-3 text-center sm:text-left">
                                    Quick Links
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="#home"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center sm:justify-start space-x-2"
                                        >
                                            <HomeIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#domain"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center sm:justify-start space-x-2"
                                        >
                                            <GlobeAltIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                            <span>Domain</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#projects"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center sm:justify-start space-x-2"
                                        >
                                            <BriefcaseIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                            <span>Projects</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#contact"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors flex items-center justify-center sm:justify-start space-x-2"
                                        >
                                            <EnvelopeIcon className="w-4 h-4 text-purple-300 dark:text-blue-500" />
                                            <span>Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-3 text-center sm:text-left">
                                    Support
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="#privacy"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center sm:text-left"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#terms"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center sm:text-left"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#help"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center sm:text-left"
                                        >
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#faq"
                                            className="text-purple-200 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors block text-center sm:text-left"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact & Additional Info */}

                        {/* Copyright */}
                        <div className="mt-20 text-center sm:text-left">
                            <p className="text-purple-200 dark:text-gray-600 text-sm text-center sm:text-left">
                                © {new Date().getFullYear()} Project Pilot. All rights reserved.
                            </p>
                            <p className="text-purple-300 dark:text-gray-500 text-xs mt-1 text-center sm:text-left">
                                Empowering innovation through expert guidance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}



