// "use client";

// // import Navbar from "@/components/navbar"
// import HeroSection from "@/components/herosection"
// import DomainSection from "@/components/domain-section"
// import ContactForm from "@/components/contact-form"
// import Footer from "@/components/footer"

// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   NavbarLogo,
//   NavbarButton,
//   MobileNav,
//   MobileNavHeader,
//   MobileNavMenu,
//   MobileNavToggle,
// } from "@/components/ui/resizable-navbar"

// import React, { useState } from "react";

// const navItems = [
//   { name: "HOME", link: "#home" },
//   { name: "DOMAINS", link: "#domain" },
//   { name: "CONTACT US", link: "#contact" },
// ];




// export default function Home() {
//   const [isMobileOpen, setMobileOpen] = useState(false);
//   return (
//     // <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/30">



//     // we are using this one
//     // <div className="min-h-screen bg-gradient-to-br from-[#f5faff] via-[#e0ecff] to-[#f9f9fb] dark:from-slate-950 dark:via-blue-950 dark:to-purple-900">


//     <div className="min-h-screen bg-gradient-to-br
//     from-[#e6f1ff] via-[#cadbff] to-[#ffffff]
//     dark:from-[#0b0f1a] dark:via-[#141b2f] dark:to-[#1c1f2e]">




//       <Navbar>
//         {/* Desktop Nav */}
//         <NavBody>
//           <NavbarLogo />
//           <NavItems items={navItems} />
//           <NavbarButton href="#contact">Book a Call</NavbarButton>
//         </NavBody>

//         {/* Mobile Nav */}
//         <MobileNav visible>
//           <MobileNavHeader>
//             <NavbarLogo />
//             <MobileNavToggle
//               isOpen={isMobileOpen}
//               onClick={() => setMobileOpen((prev) => !prev)}
//             />
//           </MobileNavHeader>
//           <MobileNavMenu isOpen={isMobileOpen} onClose={() => setMobileOpen(false)}>
//             {navItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="text-black dark:text-white font-medium"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//             <NavbarButton href="#contact" className="mt-4">
//               Book a Call
//             </NavbarButton>
//           </MobileNavMenu>
//         </MobileNav>
//       </Navbar>

//       {/* < Navbar /> */}



//       <section id="home">
//         <HeroSection />
//       </section>

//       {/* DOMAIN SECTION */}
//       <section id="domain" className="min-h-screen">
//         <DomainSection />
//       </section>

//       {/* CONTACT SECTION */}
//       <section id="contact" className="min-h-screen">
//         <ContactForm />
//         <Footer />
//       </section>
//     </div >
//   )
// }




"use client"

import HeroSection from "@/components/herosection"
import DomainSection from "@/components/domain-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { TimelineDemo } from "@/components/timelineown"
import { StatsSection } from "@/components/stats-section"

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"


const navItems = [
  { name: "HOME", link: "#home" },
  { name: "DOMAINS", link: "#domain" },
  { name: "CONTACT US", link: "#contact" },
]


export default function Home() {
  const [isMobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f1ff] via-[#cadbff] to-[#ffffff] dark:from-[#0b0f1a] dark:via-[#141b2f] dark:to-[#1c1f2e]">


      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <NavbarButton href="#contact">Book a Call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <MobileNavToggle isOpen={isMobileOpen} onClick={() => setMobileOpen((prev) => !prev)} />
            </div>
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileOpen} onClose={() => setMobileOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-black dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="#contact" className="mt-4 w-full font-sora font-bold text-center">
              Book a Call
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Domain Section */}
      <section id="domain" className="min-h-screen">
        <DomainSection />
      </section>

      <section id="timeline" className="min-h-screen">
        <TimelineDemo />
      </section>

      <StatsSection />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <ContactForm />
        <Footer />
      </section>
    </div>
  )
}
