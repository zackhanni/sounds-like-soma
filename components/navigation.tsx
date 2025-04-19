"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Samples", href: "/samples" },
    { name: "Blog", href: "/blog" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#2E2E2E] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {isMobile ? (
              <Link href="/" className="block">
                <div className="relative w-10 h-10 bg-purple-600 rounded">
                  <span className="absolute inset-0 flex items-center justify-center text-[#FFFFF0] font-bold text-xs">
                    SLS
                  </span>
                </div>
              </Link>
            ) : (
              <Link href="/" className="block">
                <h1 className="text-2xl md:text-3xl font-bold text-[#FFFFF0] font-['Audiowide',_sans-serif]">
                  Sounds Like Soma
                </h1>
              </Link>
            )}
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#FFFFF0] hover:text-purple-400 transition-colors px-2 py-1 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-[#FFFFF0]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-[#2E2E2E] z-40 transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="pt-20 pb-6 px-4 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-[#FFFFF0] hover:text-purple-400 transition-colors py-3 text-lg font-medium border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
