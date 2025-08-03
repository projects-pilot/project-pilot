

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MagicCard } from "@/components/magicui/magic-card"
import { useTheme } from "next-themes"

import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { API_BASE_URL } from "@/lib/api"
import {
    User,
    Phone,
    Mail,
    ArrowRight,
    ArrowLeft,
    X,
    Briefcase,
    FileText,
    Code,
    Youtube,
    CalendarIcon,
    Send,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface ContactData {
    fullName: string
    phone: string
    email: string
}

interface ProjectData {
    title: string
    brief: string
    technology: string
    hasYoutubeLink: string
    youtubeLink: string
    deadline: Date | undefined
}

export default function ContactForm() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [step, setStep] = useState(1)
    const [contactData, setContactData] = useState<ContactData>({
        fullName: "",
        phone: "",
        email: "",
    })
    const [projectData, setProjectData] = useState<ProjectData>({
        title: "",
        brief: "",
        technology: "",
        hasYoutubeLink: "",
        youtubeLink: "",
        deadline: undefined,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (contactData.fullName && contactData.phone && contactData.email) {
            setStep(2)
        }
    }

    // const handleProjectSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     console.log("Form submitted:", { ...contactData, ...projectData })
    //     // Handle form submission here
    // }

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleProjectSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const payload = {
            full_name: contactData.fullName,
            phone_number: contactData.phone,
            email_id: contactData.email,
            project_title: projectData.title,
            project_description: projectData.brief,
            technologies_preferred: projectData.technology,
            youtube_link: projectData.hasYoutubeLink === "yes" ? projectData.youtubeLink : "",
            delivery_date: projectData.deadline ? projectData.deadline.toISOString().split("T")[0] : null,
        }

        setIsSubmitting(true)

        try {
            const res = await fetch(`${API_BASE_URL}/contact/whatsappmessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            // if (res.status === 200) {
            //     toast.success("Message sent successfully!")
            //     handleCancel()
            //     setStep(1)
            if (res.status === 200) {
                const data = await res.json()
                toast.success("Message sent successfully!")


                setTimeout(() => {
                    window.location.href = data.redirect_url
                }, 1500)

                handleCancel()
                setStep(1)
            } else if (res.status === 404) {
                toast.error("Endpoint not found (404).")
            } else if (res.status === 500) {
                toast.error("Server error (500). Please try again later.")
            } else {
                toast.error(`Unexpected error (${res.status}).`)
            }
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong. Please check your connection.")
        } finally {
            setIsSubmitting(false)
        }
    }


    const handleCancel = () => {
        setContactData({ fullName: "", phone: "", email: "" })
        setProjectData({
            title: "",
            brief: "",
            technology: "",
            hasYoutubeLink: "",
            youtubeLink: "",
            deadline: undefined,
        })
        setStep(1)
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            {/* <div className={cn("w-full mx-auto mt-16", step === 1 ? "max-w-lg" : "max-w-xl")}> */}
            <div className={cn("w-full mx-auto", step === 1 ? "mt-16 max-w-lg" : "mt-28 max-w-xl")}>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center space-x-4">
                        <div
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                                step >= 1
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/50 text-white"
                                    : "bg-muted text-muted-foreground",
                            )}
                        >
                            1
                        </div>
                        <div
                            className={cn(
                                "w-12 h-0.5 transition-all",
                                step >= 2
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/50"
                                    : "bg-muted",
                            )}
                        />
                        <div
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                                step >= 2
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/50 text-white"
                                    : "bg-muted text-muted-foreground",
                            )}
                        >
                            2
                        </div>
                    </div>
                </div>

                <MagicCard
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                    gradientFrom="#9E7AFF"
                    gradientTo="#FE8BBB"
                    className="p-0 overflow-hidden"
                >
                    {/* Card Header */}
                    <div
                        className={cn(
                            "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-b border-border/50 px-6 sm:px-8",
                            step === 1 ? "py-6" : "py-8",
                        )}
                    >
                        <div className="text-center">
                            <h1 className="text-xl sm:text-2xl font-sora font-bold bg-gradient-to-r from-blue-900 via-purple-700 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
                                {step === 1 ? "Let's Connect" : "Project Details"}
                            </h1>

                            {step === 1 && <p className="text-muted-foreground text-sm mt-2">Share your contact details</p>}
                        </div>
                    </div>

                    <div className="p-6 sm:p-8">
                        {step === 1 ? (
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-purple-500" />
                                        Full Name
                                    </Label>
                                    <Input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={contactData.fullName}
                                        onChange={(e) => setContactData((prev) => ({ ...prev, fullName: e.target.value }))}
                                        className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-purple-500" />
                                        Phone Number
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={contactData.phone}
                                        onChange={(e) => setContactData((prev) => ({ ...prev, phone: e.target.value }))}
                                        className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-purple-500" />
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={contactData.email}
                                        onChange={(e) => setContactData((prev) => ({ ...prev, email: e.target.value }))}
                                        className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                                        required
                                    />
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleCancel}
                                        className="flex-1 group hover:border-red-300 hover:text-red-600 transition-all duration-200 bg-transparent"
                                    >
                                        <X className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-md transition-all duration-200 group"
                                    >
                                        Next
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleProjectSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="projectTitle" className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4 text-purple-500" />
                                        Project Title
                                    </Label>
                                    <Input
                                        id="projectTitle"
                                        type="text"
                                        placeholder="Enter your project title"
                                        value={projectData.title}
                                        onChange={(e) => setProjectData((prev) => ({ ...prev, title: e.target.value }))}
                                        className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="projectBrief" className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-purple-500" />
                                        Project Brief
                                        <span className="text-xs text-muted-foreground ml-auto">{projectData.brief.length}/1000</span>
                                    </Label>
                                    <Textarea
                                        id="projectBrief"
                                        placeholder="Describe your project in detail..."
                                        value={projectData.brief}
                                        onChange={(e) => {
                                            if (e.target.value.length <= 1000) {
                                                setProjectData((prev) => ({ ...prev, brief: e.target.value }))
                                            }
                                        }}
                                        className="min-h-[80px] transition-all duration-200 focus:ring-2 focus:ring-purple-500/20 resize-none"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="technology" className="flex items-center gap-2">
                                        <Code className="h-4 w-4 text-purple-500" />
                                        Technology Preferred
                                    </Label>
                                    <Input
                                        id="technology"
                                        type="text"
                                        placeholder="e.g., React, Next.js, Python..."
                                        value={projectData.technology}
                                        onChange={(e) => setProjectData((prev) => ({ ...prev, technology: e.target.value }))}
                                        className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <Label className="flex items-center gap-2">
                                        <Youtube className="h-4 w-4 text-red-500" />
                                        Do you have a YouTube video reference?
                                    </Label>
                                    <Select
                                        value={projectData.hasYoutubeLink}
                                        onValueChange={(value) =>
                                            setProjectData((prev) => ({
                                                ...prev,
                                                hasYoutubeLink: value,
                                                youtubeLink: value === "no" ? "" : prev.youtubeLink,
                                            }))
                                        }
                                    >
                                        <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20">
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes</SelectItem>
                                            <SelectItem value="no">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {projectData.hasYoutubeLink === "yes" && (
                                        <div className="mt-3 animate-in slide-in-from-top-2 duration-300">
                                            <Input
                                                id="youtubeLink"
                                                type="url"
                                                placeholder="https://youtube.com/watch?v=..."
                                                value={projectData.youtubeLink}
                                                onChange={(e) => setProjectData((prev) => ({ ...prev, youtubeLink: e.target.value }))}
                                                className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2">
                                        <CalendarIcon className="h-4 w-4 text-purple-500" />
                                        Expected Deadline
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "w-full justify-start text-left font-normal transition-all duration-200 hover:border-purple-300",
                                                    !projectData.deadline && "text-muted-foreground",
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {projectData.deadline ? format(projectData.deadline, "PPP") : "Pick a date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={projectData.deadline}
                                                onSelect={(date) => setProjectData((prev) => ({ ...prev, deadline: date }))}
                                                disabled={(date) => date < new Date()}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setStep(1)}
                                        className="flex-1 group hover:border-gray-400 transition-all duration-200"
                                    >
                                        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                                        Back
                                    </Button>


                                    {/* <Button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-200 group"
                                    >
                                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                                        Send
                                        </Button> */}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-200 group"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                                                Send
                                            </>
                                        )}
                                    </Button>


                                </div>
                            </form>
                        )}
                    </div>
                </MagicCard>
            </div>
        </div>
    )
}
