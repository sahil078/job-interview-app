import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { ResumeService } from "@/types/resume-service"

export default function ResumeServicesSection() {
  const services: ResumeService[] = [
    {
      id: "resume-bundle",
      name: "Resume Bundle",
      price: 1000,
      period: "one-time",
      features: [
        "Professional resume writing",
        "Cover letter writing",
        "LinkedIn profile optimization",
        "Job search strategy session",
        "Interview preparation guide",
        "30-day support",
      ],
    },
    {
      id: "interview-prep",
      name: "Interview Prep",
      price: 500,
      period: "one-time",
      features: [
        "Mock interview session",
        "Industry-specific questions",
        "Personalized feedback",
        "Follow-up strategy",
        "Salary negotiation tips",
        "14-day support",
      ],
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center text-blue-900">Resume Building & Coaching</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm sm:text-base">
          Comprehensive services to boost your job search success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
              <h3 className="font-bold text-lg sm:text-xl mb-2">{service.name}</h3>
              <div className="mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600">${service.price}</span>
                <span className="text-gray-500 ml-1 text-sm sm:text-base">/{service.period}</span>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6">
                {service.features.map((feature, index) => (
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
