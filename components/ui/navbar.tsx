"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Search Quotes", href: "/search-quotes" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
          <Link href="/" className="text-primary-foreground text-3xl font-extrabold tracking-tight transition-all duration-300 transform hover:scale-105 group">
            <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md group-hover:bg-[#5fd0c7]">Oz</span>
            <span className="ml-1 group-hover:text-[#5fd0c7]">Quotes</span>
          </Link>
          <button
            className="md:hidden text-primary-foreground hover:text-accent-foreground transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium text-primary-foreground hover:bg-[#5fd0c7] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 ${
                pathname === item.href ? "bg-secondary text-secondary-foreground" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 px-4 text-primary-foreground hover:bg-[#5fd0c7] hover:text-black transition-all duration-300 rounded-md ${
                pathname === item.href ? "bg-secondary text-secondary-foreground" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}