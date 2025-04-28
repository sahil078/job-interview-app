import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-6 sm:py-8 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold text-lg sm:text-xl">STILL HAVE DOUBTS?</h3>
            <p className="text-blue-200 text-sm sm:text-base">Contact us</p>
          </div>

          <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full w-full sm:w-auto">
            <span>Contact us</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
