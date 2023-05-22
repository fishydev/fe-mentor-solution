"use client"

import { useState } from "react"
import "./navbar.css"
import Button from "./button"

import LogoIcon from "@/public/assets/shared/logo.svg"
import HamburgerIcon from "@/public/assets/shared/icon-hamburger.svg"
import CloseIcon from "@/public/assets/shared/icon-close.svg"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

const pages = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/destination",
    name: "Destination",
  },
  {
    url: "/crew",
    name: "Crew",
  },
  {
    url: "/technology",
    name: "Technology",
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const showNavs = (val: boolean) => {
    setOpen(val)
  }

  return (
    <header>
      <div className="flex justify-between px-6 pt-6 absolute w-screen">
        <Button>
          <Image src={LogoIcon} alt="home icon" />
        </Button>
        <Button className="md:hidden" onClick={() => showNavs(true)}>
          <Image src={HamburgerIcon} alt="show navigation links" />
        </Button>
      </div>

      {/* Mobile Navbar */}
      <nav
        className={clsx(
          open ? "nav-open" : "",
          "absolute md:hidden top-0 h-full w-4/6 text-[28px] tracking-[4.75] backdrop-blur-3xl p-8"
        )}
      >
        <div className="flex justify-end mb-16">
          <Button onClick={() => showNavs(false)}>
            <Image src={CloseIcon} alt="hide navigation links" />
          </Button>
        </div>
        <ol className="flex flex-col gap-4">
          {pages.map((page) => (
            <li key={page.url}>
              <Link href={page.url}>{page.name}</Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* Tablet & Desktop navbar */}
      <nav
        className={clsx(
          "nav-open absolute top-0 text-[28px] tracking-[4.75] backdrop-blur-3xl p-8"
        )}
      >
        <ol className="flex gap-12">
          {pages.map((page) => (
            <li className="uppercase" key={page.url}>
              <Link href={page.url}>{page.name}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  )
}

export default Navbar
