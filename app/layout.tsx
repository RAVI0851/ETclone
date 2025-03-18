import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "About | Free AI-Powered ATS & Tech Assessment Insights | Everything Talent",
  description:
    "Access guides and tips for Free AI-Powered ATS & Tech Assessment Platform. Streamline your hiring process and optimize recruitment with Everything Talent.",
  keywords:
    "Free Applicant Tracking System,AI-Powered Tech Assessment Platform,Free ATS for Hiring,AI-Driven Recruitment Tools,Best Free ATS Software,AI Integrated Hiring Assessments,Tech Talent Hiring Platform,Advanced Proctoring for Assessments,AI Proctoring for Online Tests,Randomized Question Assessments,Top Talent Identification Tools,AI-Powered Interview Automation,Flexible Hiring Solutions Platform,Optimize Recruitment Process,Unlimited Recruiter Access,Extensive Test Library for Hiring,LinkedIn Integration for Recruitment,Dedicated Onboarding Support for ATS,Hiring Analytics Tools,Support for Multiple Programming Languages,SOC2 Compliant ATS,Anti-Cheat Technology for Assessments,AI-Powered Recruitment Platform,Efficient Hiring Solutions,No-Cost Applicant Tracking System,Smart Hiring with AI Assessments,Secure Online Assessments,AI-Assisted HR Interviews,Recruitment Platform for Startups,Tech Talent Acquisition Tools,Data-Driven Hiring Decisions,Free Recruitment Management System,AI-Enhanced Hiring Solutions,Real-Time Assessment Monitoring,Robust Test Questions Library,LinkedIn Applicant Import,Customizable Hiring Workflow,Candidate Performance Reporting,Advanced Recruitment Analytics,AI-Driven Candidate Evaluation,Secure Recruitment Platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'