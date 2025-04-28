"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
            <span className="text-blue-600 text-xl">J</span>
          </div>
          JobMagnet
        </Link>

        <div className="hidden md:flex space-x-6 text-white">
          <Link href="#" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="#" className="hover:text-blue-200">
            About Us
          </Link>
          <Link href="#" className="hover:text-blue-200">
            Testimonials
          </Link>
          <Link href="#" className="hover:text-blue-200">
            Pricing
          </Link>
          <Link href="#" className="hover:text-blue-200">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-blue-200">
            More
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 hidden sm:flex">Contact Us</Button>
          <button className="text-white md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-blue-700 rounded-lg p-4">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="#" className="hover:text-blue-200 py-2">
              Home
            </Link>
            <Link href="#" className="hover:text-blue-200 py-2">
              About Us
            </Link>
            <Link href="#" className="hover:text-blue-200 py-2">
              Testimonials
            </Link>
            <Link href="#" className="hover:text-blue-200 py-2">
              Pricing
            </Link>
            <Link href="#" className="hover:text-blue-200 py-2">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-200 py-2">
              More
            </Link>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 w-full mt-2">Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
