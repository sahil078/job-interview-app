import type { Benefit } from "@/types/benefit"
import { Heart, User, Star } from "lucide-react"

export default function WhyChooseUsSection() {
  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      title: "High Success Rates",
      description: "Over 90% of our clients land interviews within 30 days of using our services.",
    },
    {
      id: 2,
      icon: <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      title: "Dedicated Service",
      description: "Each client gets a dedicated resume writer who understands their industry and career goals.",
    },
    {
      id: 3,
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      title: "World-Class Team",
      description: "Our team consists of certified resume writers with experience in various industries.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 md:mb-12 text-center text-blue-900">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 text-blue-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
