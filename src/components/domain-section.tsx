
// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { PixelImage } from "@/components/magicui/pixel-image"


// const domains = [
//     {
//         id: 1,
//         title: "IOT",
//         image: "/image1.png",
//         description:
//             "Connecting devices and creating smart ecosystems that revolutionize how we interact with technology in our daily lives.",
//         details:
//             "From smart homes to industrial automation, we help you build intelligent, connected systems. Whether it’s sensor integration, real-time data tracking, or seamless device communication, we’re here to assist you every step of the way with practical and impactful IoT solutions.",
//     },
//     {
//         id: 2,
//         title: "Software Projects",
//         image: "/image2.png",
//         description:
//             "Designing and building a variety of software solutions tailored to different business and academic needs.",
//         details:
//             "We assist you in creating customized software projects—be it academic or professional. From automation tools to full-stack applications, we support you with design, development, and technical guidance using technologies like Python, Java, C++, and more. We’re here to turn your ideas into functional reality.",
//     },
//     {
//         id: 3,
//         title: "AI and ML",
//         image: "/image4.png",
//         description:
//             "Leveraging artificial intelligence and machine learning to solve complex problems and automate intelligent solutions.",
//         details:
//             "Looking to make smarter decisions or automate tasks? We’re here to guide you through AI & ML solutions like chatbots, vision systems, predictive models, and more. Our goal is to help you apply intelligence in meaningful ways—no complexity, just clarity and support.",
//     },
//     {
//         id: 4,
//         title: "Electricals",
//         image: "/image5.png", // Replace with actual image path
//         description:
//             "Engineering electrical systems and innovations for real-world industrial and academic applications.",
//         details:
//             "Whether you're building smart energy systems or working on control circuits, we’re here to help. We support you in designing and implementing electrical projects—from solar-powered setups to automation with Arduino or PLC. Simple, practical, and guided at every step.",
//     },
// ];


// export default function DomainSection() {
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const [selectedDomain, setSelectedDomain] = useState<(typeof domains)[0] | null>(null)

//     const itemsPerPage = 2
//     const totalPages = Math.ceil(domains.length / itemsPerPage)

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % totalPages)
//     }

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
//     }

//     const getCurrentDomains = () => {
//         const start = currentIndex * itemsPerPage
//         return domains.slice(start, start + itemsPerPage)
//     }

//     return (
//         <section
//             id="domain"
//             className="min-h-screen px-4 py-20 "
//         >
//             <main className="container mx-auto px-4 py-20">
//                 <div className="text-center space-y-6 mb-14">

//                     <p className=" font-sora text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300 tracking-wide">
//                         Explore our expertise across cutting-edge technology domains
//                     </p>

//                 </div>

//                 {/* Carousel Container */}
//                 <div className="relative max-w-7xl mx-auto">
//                     {/* Premium Navigation Buttons */}
//                     <Button
//                         variant="outline"
//                         size="icon"
//                         className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md hover:bg-white dark:hover:bg-gray-900 shadow-2xl border-0 rounded-full w-12 h-12 md:w-14 md:h-14 hover:scale-110 transition-all duration-300 hover:shadow-purple-500/25"
//                         onClick={prevSlide}
//                         disabled={currentIndex === 0}
//                     >
//                         <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-black dark:text-white" />
//                     </Button>

//                     <Button
//                         variant="outline"
//                         size="icon"
//                         className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md hover:bg-white dark:hover:bg-gray-900 shadow-2xl border-0 rounded-full w-12 h-12 md:w-14 md:h-14 hover:scale-110 transition-all duration-300 hover:shadow-purple-500/25"
//                         onClick={nextSlide}
//                         disabled={currentIndex === totalPages - 1}
//                     >
//                         <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-black dark:text-white" />
//                     </Button>

//                     {/* Domain Cards */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-12 md:px-16">
//                         {getCurrentDomains().map((domain) => (
//                             <div
//                                 key={domain.id}
//                                 className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] mx-auto max-w-sm"
//                                 onClick={() => setSelectedDomain(domain)}
//                             >
//                                 <div className="relative bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 hover:shadow-3xl backdrop-blur-sm h-[500px]">
//                                     {/* Image Container with PixelImage - Full Container */}
//                                     <div className="relative h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
//                                         <PixelImage
//                                             src={domain.image}
//                                             grid="8x8"
//                                             grayscaleAnimation={true}
//                                             pixelFadeInDuration={800}
//                                             maxAnimationDelay={1000}
//                                             colorRevealDelay={1200}
//                                         />

//                                         {/* Premium Gradient Overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

//                                         {/* Title Overlay with Premium Styling */}
//                                         <div className="absolute bottom-6 left-6 right-6 z-20">
//                                             <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-2xl tracking-wide">
//                                                 {domain.title}
//                                             </h3>
//                                             <p className="text-white text-xs md:text-sm line-clamp-2 drop-shadow-lg opacity-90">
//                                                 {domain.description}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Simple Premium Hover Effect */}
//                                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-30">
//                                         <div className="bg-white/95 dark:bg-gray-900/95 px-6 py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
//                                             <span className="text-gray-800 dark:text-gray-200 font-medium text-sm tracking-wide">
//                                                 Click to explore
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Premium Pagination Dots */}
//                     <div className="flex justify-center mt-8 md:mt-10 space-x-4">
//                         {Array.from({ length: totalPages }).map((_, index) => (
//                             <button
//                                 key={index}
//                                 className={`relative transition-all duration-500 ${index === currentIndex
//                                     ? "w-8 h-3 md:w-10 md:h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/50 scale-110"
//                                     : "w-3 h-3 md:w-4 md:h-4 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:scale-125 shadow-md"
//                                     }`}
//                                 onClick={() => setCurrentIndex(index)}
//                             >
//                                 {index === currentIndex && (
//                                     <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-50" />
//                                 )}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Premium Glassmorphism Modal */}
//                 {selectedDomain && (
//                     <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
//                         <div className="relative w-full max-w-6xl h-[600px] bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-2xl overflow-hidden">
//                             {/* Close Button */}
//                             <button
//                                 onClick={() => setSelectedDomain(null)}
//                                 className="absolute top-6 right-6 z-10 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 border border-white/30 dark:border-gray-700/30"
//                             >
//                                 <X className="w-5 h-5 text-white" />
//                             </button>

//                             {/* Modal Content */}
//                             <div className="flex flex-col lg:flex-row h-full">
//                                 {/* Image Section - Full Background Coverage */}
//                                 <div className="lg:w-2/5 h-64 lg:h-full relative overflow-hidden rounded-l-3xl">
//                                     <PixelImage
//                                         src={selectedDomain.image}
//                                         grid="8x8"
//                                         grayscaleAnimation={true}
//                                         pixelFadeInDuration={600}
//                                         maxAnimationDelay={800}
//                                         colorRevealDelay={1000}
//                                     />
//                                 </div>

//                                 {/* Content Section */}
//                                 <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
//                                     {/* Glassy Premium Headline */}
//                                     <div className="mb-8">
//                                         <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
//                                             {selectedDomain.title}
//                                         </h2>
//                                         <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"></div>
//                                     </div>

//                                     {/* Description */}
//                                     <div className="space-y-6">
//                                         <p className="text-lg lg:text-xl text-white leading-relaxed font-medium">
//                                             {selectedDomain.description}
//                                         </p>

//                                         {/* Details Card */}
//                                         <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 dark:border-gray-700/30">
//                                             <h4 className="text-xl font-bold text-white mb-4 flex items-center">
//                                                 <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
//                                                 What we offer
//                                             </h4>
//                                             <p className="text-white leading-relaxed opacity-90">{selectedDomain.details}</p>
//                                         </div>
//                                     </div>

//                                     {/* Action Button */}
//                                     <div className="mt-8">
//                                         <Button
//                                             onClick={() => setSelectedDomain(null)}
//                                             className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
//                                         >
//                                             close
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </main>
//         </section>
//     )
// }



// "use client"

// import { useState } from "react"
// import { X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { PixelImage } from "@/components/magicui/pixel-image"

// const domains = [
//     {
//         id: 1,
//         title: "IOT",
//         image: "/image1.png",
//         description:
//             "Connecting devices and creating smart ecosystems that revolutionize how we interact with technology in our daily lives.",
//         details:
//             "From smart homes to industrial automation, we help you build intelligent, connected systems. Whether it's sensor integration, real-time data tracking, or seamless device communication, we're here to assist you every step of the way with practical and impactful IoT solutions.",
//     },
//     {
//         id: 2,
//         title: "Software Projects",
//         image: "/image2.png",
//         description:
//             "Designing and building a variety of software solutions tailored to different business and academic needs.",
//         details:
//             "We assist you in creating customized software projects—be it academic or professional. From automation tools to full-stack applications, we support you with design, development, and technical guidance using technologies like Python, Java, C++, and more. We're here to turn your ideas into functional reality.",
//     },
//     {
//         id: 3,
//         title: "AI and ML",
//         image: "/image4.png",
//         description:
//             "Leveraging artificial intelligence and machine learning to solve complex problems and automate intelligent solutions.",
//         details:
//             "Looking to make smarter decisions or automate tasks? We're here to guide you through AI & ML solutions like chatbots, vision systems, predictive models, and more. Our goal is to help you apply intelligence in meaningful ways—no complexity, just clarity and support.",
//     },
//     {
//         id: 4,
//         title: "Electricals",
//         image: "/image5.png",
//         description: "Engineering electrical systems and innovations for real-world industrial and academic applications.",
//         details:
//             "Whether you're building smart energy systems or working on control circuits, we're here to help. We support you in designing and implementing electrical projects—from solar-powered setups to automation with Arduino or PLC. Simple, practical, and guided at every step.",
//     },
// ]

// export default function DomainSection() {
//     const [selectedDomain, setSelectedDomain] = useState<(typeof domains)[0] | null>(null)

//     return (
//         <section id="domain" className="min-h-screen px-4 py-20">
//             <main className="container mx-auto px-4 py-20">
//                 <div className="text-center space-y-6 mb-16">
//                     <p className="font-sora text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300 tracking-wide">
//                         Explore our expertise across cutting-edge technology domains
//                     </p>
//                 </div>

//                 {/* All Domain Cards in One Row */}
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
//                         {domains.map((domain) => (
//                             <div
//                                 key={domain.id}
//                                 className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
//                                 onClick={() => setSelectedDomain(domain)}
//                             >
//                                 <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 hover:shadow-3xl backdrop-blur-sm h-[400px] md:h-[450px]">
//                                     {/* Image Container with PixelImage */}
//                                     <div className="relative h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
//                                         <PixelImage
//                                             src={domain.image}
//                                             grid="8x8"
//                                             grayscaleAnimation={true}
//                                             pixelFadeInDuration={800}
//                                             maxAnimationDelay={1000}
//                                             colorRevealDelay={1200}
//                                         />

//                                         {/* Premium Gradient Overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

//                                         {/* Title Overlay with Premium Styling */}
//                                         <div className="absolute bottom-4 left-4 right-4 z-20">
//                                             <h3 className="text-base md:text-lg font-bold text-white mb-2 drop-shadow-2xl tracking-wide">
//                                                 {domain.title}
//                                             </h3>
//                                             <p className="text-white text-xs md:text-sm line-clamp-3 drop-shadow-lg opacity-90">
//                                                 {domain.description}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Premium Hover Effect */}
//                                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-30">
//                                         <div className="bg-white/95 dark:bg-gray-900/95 px-4 py-2 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
//                                             <span className="text-gray-800 dark:text-gray-200 font-medium text-xs md:text-sm tracking-wide">
//                                                 Click to explore
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Premium Glassmorphism Modal */}
//                 {selectedDomain && (
//                     <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
//                         <div className="relative w-full max-w-6xl h-[90vh] max-h-[600px] bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl overflow-hidden">
//                             {/* Close Button */}
//                             <button
//                                 onClick={() => setSelectedDomain(null)}
//                                 className="absolute top-6 right-6 z-10 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 border border-white/30 dark:border-gray-700/30"
//                             >
//                                 <X className="w-5 h-5 text-white" />
//                             </button>

//                             {/* Modal Content */}
//                             <div className="flex flex-col lg:flex-row h-full">
//                                 {/* Image Section */}
//                                 <div className="lg:w-2/5 h-64 lg:h-full relative overflow-hidden rounded-l-2xl">
//                                     <PixelImage
//                                         src={selectedDomain.image}
//                                         grid="8x8"
//                                         grayscaleAnimation={true}
//                                         pixelFadeInDuration={600}
//                                         maxAnimationDelay={800}
//                                         colorRevealDelay={1000}
//                                     />
//                                 </div>

//                                 {/* Content Section */}
//                                 <div className="lg:w-3/5 p-6 lg:p-12 flex flex-col justify-center overflow-y-auto">
//                                     {/* Premium Headline */}
//                                     <div className="mb-6">
//                                         <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
//                                             {selectedDomain.title}
//                                         </h2>
//                                         <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"></div>
//                                     </div>

//                                     {/* Description */}
//                                     <div className="space-y-6">
//                                         <p className="text-base lg:text-xl text-white leading-relaxed font-medium">
//                                             {selectedDomain.description}
//                                         </p>

//                                         {/* Details Card */}
//                                         <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl p-6 border border-white/30 dark:border-gray-700/30">
//                                             <h4 className="text-lg font-bold text-white mb-4 flex items-center">
//                                                 <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
//                                                 What we offer
//                                             </h4>
//                                             <p className="text-white leading-relaxed opacity-90 text-sm lg:text-base">
//                                                 {selectedDomain.details}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Action Button */}
//                                     <div className="mt-8">
//                                         <Button
//                                             onClick={() => setSelectedDomain(null)}
//                                             className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
//                                         >
//                                             Close
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </main>
//         </section>
//     )
// }



"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"


const domains = [
    {
        id: 1,
        title: "IOT",
        images: [
            "/image1.png",
            "/Iot.png",
            "/iot2.png",
        ],
        description:
            "Connecting devices and creating smart ecosystems that revolutionize how we interact with technology in our daily lives.",
        details:
            "Working on an IoT-based project? We’re here to assist you—whether it’s industrial automation, academic models, sensor-based monitoring, or wireless control systems. From idea to implementation, we guide you in using the right components, microcontrollers, and communication protocols to make your project a success—clearly, simply, and step by step.",
    },
    {
        id: 2,
        title: "Software Projects",
        images: [
            "/s1.png",
            "/s2.png",
            "/two.png",
        ],
        description:
            "Designing and building a variety of software solutions tailored to different business and academic needs.",
        details:
            "Need help with a software project? Whether you're working on academic tools, automation systems, or web and mobile apps—we assist you with planning, development, and debugging. From basic scripting to full-stack projects , we guide you all the way with hands-on support.",
    },
    {
        id: 3,
        title: "AI and ML",
        images: [
            "/aiml.png",
            "/aime.png",
            "/one.png",
        ],
        description:
            "Leveraging artificial intelligence and machine learning to solve complex problems and automate intelligent solutions.",
        details:
            "Exploring AI or machine learning for your project? We assist you in building intelligent systems like image classifiers, predictive models, recommendation engines, or chatbots. From dataset preparation to training models, we guide you with practical steps and clear explanations—ideal for academic or research work.",
    },
    {
        id: 4,
        title: "Electricals",
        images: [
            "/electrical.png",
            "/ele.png",
            "/ele3.png",
        ],
        description:
            "Engineering electrical systems and innovations for real-world industrial and academic applications.",
        details:
            "Working on an electrical project? We help you design, test, and build systems involving circuits, control logic, automation, or power management. Whether it’s Arduino, PLC, or sensor-based systems, we provide support to ensure your academic or industrial electrical projects are well-guided and technically sound.",
    },
];


export default function DomainSection() {
    const [selectedDomain, setSelectedDomain] = useState<(typeof domains)[0] | null>(null)
    const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({})

    // Initialize image indexes
    useEffect(() => {
        const initialIndexes: { [key: number]: number } = {}
        domains.forEach((domain) => {
            initialIndexes[domain.id] = 0
        })
        setCurrentImageIndexes(initialIndexes)
    }, [])

    // Auto-cycle images every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndexes((prev) => {
                const newIndexes = { ...prev }
                domains.forEach((domain) => {
                    newIndexes[domain.id] = (prev[domain.id] + 1) % domain.images.length
                })
                return newIndexes
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section id="domain" className="min-h-screen px-4 py-20">
            <main className="container mx-auto px-4 py-20">
                <div className="text-center space-y-6 mb-16">
                    <p className="font-sora text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300 tracking-wide">
                        Explore our expertise across cutting-edge technology domains
                    </p>
                </div>
                {/* Domain Cards Grid */}
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                        {domains.map((domain) => (
                            <div
                                key={domain.id}
                                className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                                onClick={() => setSelectedDomain(domain)}
                            >
                                <div className="relative bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl overflow-hidden border border-gray-200/30 dark:border-gray-700/30 hover:shadow-3xl hover:shadow-purple-500/20 hover:border-purple-300/50 dark:hover:border-purple-600/50 transition-all duration-500 h-[420px] md:h-[460px] w-full max-w-sm mx-auto backdrop-blur-xl">
                                    {/* Image Container - 75% height */}
                                    <div className="relative h-[75%] w-full overflow-hidden rounded-t-3xl">
                                        <Image
                                            src={domain.images[currentImageIndexes[domain.id] || 0]}
                                            alt={domain.title}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                        {/* Premium gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                        {/* Image cycling indicator dots */}
                                        <div className="absolute top-4 right-4 flex space-x-2">
                                            {domain.images.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${index === (currentImageIndexes[domain.id] || 0)
                                                        ? "bg-white shadow-lg scale-110"
                                                        : "bg-white/60 hover:bg-white/80"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Text Content Container - 25% height with better visibility */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-white dark:bg-gray-800 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50">
                                        <div className="p-4 md:p-6 h-full flex flex-col justify-center relative">
                                            {/* Premium accent line */}
                                            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide leading-tight">
                                                {domain.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base line-clamp-2 leading-relaxed font-medium">
                                                {domain.description}
                                            </p>

                                            {/* Premium bottom accent */}
                                            <div className="absolute bottom-2 left-4 w-12 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-60"></div>
                                        </div>
                                    </div>

                                    {/* Smooth Premium Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                        <div className="bg-white/95 dark:bg-gray-900/95 px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                                            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm tracking-wide">
                                                Explore
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedDomain && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
                        <div className="relative w-full max-w-6xl h-[90vh] max-h-[700px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedDomain(null)}
                                className="absolute top-6 right-6 z-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </button>

                            {/* Modal Content */}
                            <div className="flex flex-col lg:flex-row h-full">
                                {/* Image Section */}
                                <div className="lg:w-2/5 h-64 lg:h-full relative overflow-hidden">
                                    <Image
                                        src={selectedDomain.images[currentImageIndexes[selectedDomain.id] || 0]}
                                        alt={selectedDomain.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-3/5 p-6 lg:p-12 flex flex-col justify-center overflow-y-auto bg-white dark:bg-gray-900">
                                    {/* Headline */}
                                    <div className="mb-6">
                                        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                            {selectedDomain.title}
                                        </h2>
                                        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-6">
                                        <p className="text-base lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                            {selectedDomain.description}
                                        </p>

                                        {/* Details Card */}
                                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                                                What we offer
                                            </h4>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                                                {selectedDomain.details}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-8">
                                        <Button
                                            onClick={() => setSelectedDomain(null)}
                                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </section>
    )
}
