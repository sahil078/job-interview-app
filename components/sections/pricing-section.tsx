import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { PricingPlan } from "@/types/pricing-plan"

export default function PricingSection() {
  const plans: PricingPlan[] = [
    {
      id: "northerner",
      name: "Northerner",
      price: 35,
      period: "one-time",
      features: [
        "Professional resume review",
        "ATS optimization",
        "24-hour turnaround time",
        "1 revision round",
        "Cover letter template",
        "Email support",
      ],
      isPopular: false,
    },
    {
      id: "starter",
      name: "Starter",
      price: 50,
      period: "one-time",
      features: [
        "Professional resume writing",
        "ATS optimization",
        "48-hour turnaround time",
        "2 revision rounds",
        "Custom cover letter",
        "LinkedIn profile optimization",
        "Email & phone support",
      ],
      isPopular: true,
    },
    {
      id: "plus",
      name: "Plus",
      price: 100,
      period: "one-time",
      features: [
        "Premium resume writing",
        "ATS optimization",
        "24-hour turnaround time",
        "Unlimited revisions",
        "Custom cover letter",
        "LinkedIn profile optimization",
        "Job application assistance",
        "30-min career coaching call",
        "Priority support",
      ],
      isPopular: false,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 md:mb-12 text-center text-blue-900">
          Job Application Service Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-4 md:p-6 ${plan.isPopular ? "border-blue-500" : "border-gray-200"}`}
            >
              {plan.isPopular && (
                <div className="flex justify-end mb-2">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">Popular</span>
                </div>
              )}
              <h3 className="font-bold text-lg sm:text-xl mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600">${plan.price}</span>
                <span className="text-gray-500 ml-1 text-sm sm:text-base">/{plan.period}</span>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
