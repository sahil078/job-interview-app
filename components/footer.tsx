import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white py-6 sm:py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xl">J</span>
            </div>
            <span className="text-blue-900 font-bold">JobMagnet</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <Link href="#" className="hover:text-blue-600 px-2">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-600 px-2">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600 px-2">
              Cookies
            </Link>
            <Link href="#" className="hover:text-blue-600 px-2">
              Contact
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} JobMagnet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
