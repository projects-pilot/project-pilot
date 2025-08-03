
// "use client"

// import { useState, useEffect } from "react"
// import { useTheme } from "next-themes"
// import { Moon, Sun } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export default function Navbar() {
//     const [mounted, setMounted] = useState(false)
//     const { theme, setTheme } = useTheme()

//     useEffect(() => {
//         setMounted(true)
//     }, [])

//     if (!mounted) {
//         return null
//     }

//     const toggleTheme = () => {
//         setTheme(theme === "dark" ? "light" : "dark")
//     }

//     const navItems = [
//         { name: "HOME", href: "#home" },
//         { name: "DOMAINS", href: "#domain" },
//         { name: "CONTACT US", href: "#contact" },
//     ]

//     return (
//         <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
//             <div className="container mx-auto px-6">
//                 <div className="flex h-20 items-center justify-between relative">
//                     {/* Logo - Left Side */}
//                     <div className="flex items-center justify-start w-1/4">
//                         <div className="transform translate-y-2">
//                             <Image
//                                 src={theme === "dark" ? "/finaldarkmode.png" : "/lighlogo.png"}
//                                 alt="Logo"
//                                 width={300}
//                                 height={80}
//                                 className="h-24 sm:h-20 md:h-22 lg:h-24 xl:h-30 w-auto object-contain"
//                                 priority
//                             />
//                         </div>
//                     </div>

//                     {/* Desktop Navigation - Perfect Center */}
//                     <div className="hidden md:flex items-center justify-center w-1/2 absolute left-1/2 transform -translate-x-1/2">
//                         <div className="flex items-center space-x-12">
//                             {navItems.map((item) => (
//                                 <Link
//                                     key={item.name}
//                                     href={item.href}
//                                     className="relative text-base font-semibold bg-gradient-to-r from-gray-700 to-purple-600 dark:from-gray-200 dark:to-blue-400 bg-clip-text text-transparent font-sora tracking-wide group transition-all duration-300 hover:scale-105"
//                                 >
//                                     {item.name}
//                                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Theme Toggle - Right Side */}
//                     <div className="flex items-center justify-end w-1/4 space-x-4">
//                         <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={toggleTheme}
//                             className="relative h-11 w-11 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-800/60 dark:hover:to-blue-800/60 border border-purple-200/50 dark:border-purple-700/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
//                         >
//                             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 text-purple-600 dark:-rotate-90 dark:scale-0" />
//                             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 text-blue-400 dark:rotate-0 dark:scale-100" />
//                             <span className="sr-only">Toggle theme</span>
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation - Below Logo */}
//                 <div className="md:hidden flex justify-center pb-4">
//                     <div className="flex items-center space-x-4">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 className="relative text-xs font-semibold bg-gradient-to-r from-gray-700 to-purple-600 dark:from-gray-200 dark:to-blue-400 bg-clip-text text-transparent font-sora tracking-wide group"
//                             >
//                                 {item.name}
//                                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }


"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [mounted, setMounted] = useState(false)
    const [activeItem, setActiveItem] = useState("HOME")
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const navItems = [
        { name: "HOME", href: "#home" },
        { name: "DOMAINS", href: "#domain" },
        { name: "CONTACT US", href: "#contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="flex h-20 items-center justify-between relative">
                    {/* Logo - Left Side */}
                    <div className="flex items-center justify-start w-1/4">
                        <div className="transform translate-y-2">
                            <Image
                                src={theme === "dark" ? "/finaldarkmode.png" : "/lighlogo.png"}
                                alt="Logo"
                                width={300}
                                height={80}
                                className="h-24 sm:h-20 md:h-22 lg:h-24 xl:h-30 w-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation - Perfect Center */}
                    <div className="hidden md:flex items-center justify-center w-1/2 absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center space-x-12">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveItem(item.name)}
                                    className={`
                    relative text-base  font-sora  font-bold tracking-wide
                    transition-all duration-300 hover:scale-105
                    ${activeItem === item.name
                                            ? // Active state
                                            theme === "dark"
                                                ? "bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
                                                : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                            : // Normal state
                                            theme === "dark"
                                                ? "text-gray-100 hover:text-gray-300"
                                                : "text-gray-800 hover:text-gray-600"
                                        }
                    hover:opacity-70
                  `}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Theme Toggle - Right Side */}
                    <div className="flex items-center justify-end w-1/4 space-x-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="relative h-11 w-11 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-800/60 dark:hover:to-blue-800/60 border border-purple-200/50 dark:border-purple-700/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 text-purple-600 dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 text-blue-400 dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation - Below Logo */}
                <div className="md:hidden flex justify-center pb-4">
                    <div className="flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveItem(item.name)}
                                className={`
                  relative text-xs  font-sora  font-bold tracking-wide
                  transition-all duration-300
                  ${activeItem === item.name
                                        ? // Active state
                                        theme === "dark"
                                            ? "bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
                                            : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                        : // Normal state
                                        theme === "dark"
                                            ? "text-gray-100 hover:text-gray-300"
                                            : "text-gray-800 hover:text-gray-600"
                                    }
                  hover:opacity-70
                `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
