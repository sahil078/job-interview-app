import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function SpecialOfferBanner() {
  const features = [
    "Priority processing with 24-hour turnaround",
    "Resume & cover letter bundle",
    "LinkedIn profile optimization",
    "Career coaching session (30 minutes)",
  ]

  return (
    <section className="py-6 sm:py-8 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-center md:text-left">
              Special Offer: Complete Package
            </h3>
            <div className="mb-3 sm:mb-4 text-center md:text-left">
              <span className="text-2xl sm:text-3xl font-bold">$150</span>
              <span className="text-blue-200 ml-1 text-sm sm:text-base">/one-time</span>
            </div>

            <ul className="space-y-1 sm:space-y-2 mb-4 md:mb-0">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100 text-xs sm:text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button className="mt-4 md:mt-0 bg-white text-blue-600 hover:bg-blue-50 w-full md:w-auto">
            Get This Deal
          </Button>
        </div>
      </div>
    </section>
  )
}
