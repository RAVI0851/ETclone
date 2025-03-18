"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, ChevronDown, ChevronRight, Sun, Moon } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-100 dark:bg-slate-950 lg:bg-transparent dark:lg:bg-transparent">
      <nav className="flex h-[54px] w-full items-center justify-between px-4 md:container md:px-8" aria-label="Global">
        <div className="w-full" style={{ opacity: 1, transform: "none" }}>
          <div className="flex items-center justify-start gap-4 w-full">
            <div className="block lg:hidden shadow-lg hover:shadow-xl border-2 border-slate-700/30 dark:border-slate-300/30 rounded-[8px]">
              <div className="flex space-x-8 rounded-[10px] bg-slate-200/20 backdrop-blur-[7px] py-[1px] px-4">
                <Link className="font-bold text-xl" href="/">
                  <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black dark:text-white dark:-ml-4 -ml-2">
                    <Image
                      alt="Logo"
                      width={40}
                      height={40}
                      className="dark:hidden block h-8 w-8"
                      src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-light.d4da7bf2.png&w=48&q=75"
                    />
                    <Image
                      alt="logo"
                      width={40}
                      height={40}
                      className="hidden dark:block h-8 w-8"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-light.d4da7bf2.png&w=96&q=75"
                    />
                    <span className="lg:hidden font-bold">Everything Talent</span>
                    <span className="hidden font-bold lg:inline-block">Everything Talent</span>
                  </div>
                </Link>
              </div>
            </div>
            <section className="shadow-lg hover:shadow-xl border-2 border-slate-700/30 dark:border-slate-300/30 rounded-[8px] backdrop-blur-[7px] hover:backdrop-blur-none">
              <ul className="hidden lg:flex gap-8 items-center rounded-[8px] dark:bg-black/40 bg-slate-200/40 backdrop-blur-[10px] hover:backdrop-blur-none py-[1px] px-4 hover:bg-slate-200 dark:hover:bg-black transition-all duration-100">
                <Link className="font-bold text-xl pl-3" href="/">
                  <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black dark:text-white dark:-ml-4 -ml-2">
                    <Image
                      alt="Logo"
                      width={40}
                      height={40}
                      className="dark:hidden block h-8 w-8"
                      src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-light.d4da7bf2.png&w=48&q=75"
                    />
                    <Image
                      alt="logo"
                      width={40}
                      height={40}
                      className="hidden dark:block h-8 w-8"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-light.d4da7bf2.png&w=96&q=75"
                    />
                    <span className="lg:hidden font-bold">Everything Talent</span>
                  </div>
                </Link>
                <div className="border-none h-[30px] w-[1px] -mx-3 bg-slate-700/30 dark:bg-slate-300/30 backdrop-blur-[7px]"></div>
                <li className="font-regular text-slate-950 dark:text-slate-50 text-sm font-[400]">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-regular text-slate-950 dark:text-slate-50 text-sm font-[400]">
                  <Link href="/products">Products</Link>
                </li>
                <nav aria-label="Main" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                  <div style={{ position: "relative" }}>
                    <ul className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
                      <li>
                        <button
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 transition-colors hover:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 group font-regular text-sm font-[400] text-slate-950 dark:text-slate-50"
                          onClick={() => setSolutionsOpen(!solutionsOpen)}
                        >
                          Solutions
                          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-100 group-data-[state=open]:rotate-180" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute left-0 top-full flex justify-center"></div>
                </nav>
                <li className="font-regular text-slate-950 font-[400] dark:text-slate-50 text-sm">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="font-regular text-slate-950 font-[400] dark:text-slate-50 text-sm">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="font-regular text-slate-950 font-[400] dark:text-slate-50 text-sm">
                  <Link href="/support">Support</Link>
                </li>
                <li className="font-regular text-sm dark:text-[#c166ee] font-bold text-customPurple dark:hover:text-customPurple hover:text-customPurple">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="flex gap-5 py-1">
          <div className="hidden md:flex animate-fade-in-right items-center rounded-[8px] border-2 border-slate-700/30 shadow-lg backdrop-blur-[7px] hover:shadow-xl dark:border-slate-300/30 hover:dark:bg-black">
            <div className="flex items-center space-x-4 rounded-[10px] bg-slate-200/40 px-[2px] pl-[2px] -py-[2px] backdrop-blur-[10px] dark:bg-black/40">
              <div className="hidden md:block">
                <div className="flex items-center justify-center">
                  <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group animate-rainbow cursor-pointer bg-[length:200%] font-medium transition-all duration-500 ease-in-out hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:hover:ring-0 [&>span]:relative [&>span]:z-10 px-4 h-full w-full rounded-md gradient-border-logo-color-btn text-center relative overflow-hidden flex items-center justify-center group/modal-btn dark:bg-black bg-white text-black dark:text-white border border-gray-100 dark:border-none py-[8px]">
                    <span className="flex ml-2 items-center text-center transition duration-500 group-hover/modal-btn:translate-x-0">
                      <p>Request a Demo</p>
                      <ChevronRight className="ml-1 h-4 w-4 translate-x-1 transition" />
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 items-center justify-center absolute inset-0 transition duration-500 dark:text-white z-20 hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar-days h-7 w-7"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-md focus:ring-none hover:bg-transparent h-5 w-5 px-0 outline-none text-muted-foreground focus:ring-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 hover:text-black dark:scale-0" />
                <Moon className="absolute rotate-90 scale-0 transition-all outline-none hover:dark:text-white dark:text-slate-400 dark:rotate-0 dark:scale-100 dark:hover:text-black" />
                <span className="sr-only">Toggle theme</span>
              </button>
              <div className="ml-6 hidden lg:block">
                <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-md bg-[length:200%] font-medium dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white dark:hover:ring-0 [&>span]:relative [&>span]:z-10 h-10 px-4 py-2 group w-full bg-white text-black border-none">
                  Login
                  <svg
                    className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-md focus:ring-none hover:bg-transparent h-5 w-5 px-0 outline-none text-muted-foreground focus:ring-0"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 hover:text-black dark:scale-0" />
              <Moon className="absolute rotate-90 scale-0 transition-all outline-none hover:dark:text-white dark:text-slate-400 dark:rotate-0 dark:scale-100 dark:hover:text-black" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
          <Menu className="hover:cursor-pointer lg:hidden -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>
      </nav>
    </header>
  )
}

