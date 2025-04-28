import { Button } from "@/components/ui/button"
import type { Testimonial } from "@/types/testimonial"

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "I got 3 interview calls within a week of using their resume service. Highly recommended!",
      author: "Michael K.",
      role: "Software Developer",
    },
    {
      id: 2,
      content:
        "Their team transformed my resume completely. I'm now getting responses from companies I've always wanted to work for.",
      author: "Jessica T.",
      role: "Marketing Manager",
    },
    {
      id: 3,
      content:
        "The best investment I've made in my career. Their coaching session helped me nail my interview at Google.",
      author: "Robert L.",
      role: "Product Manager",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 md:mb-12 text-center text-blue-900">
          What our clients have to say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4 md:p-6 relative">
              <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs">•</span>
              </div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{testimonial.content}</p>
              <div className="flex items-center mt-auto">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <span className="text-xs">•</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" className="rounded-full px-4 sm:px-6 order-2 sm:order-1">
            View more reviews
          </Button>
          <Button className="bg-blue-600 text-white rounded-full px-4 sm:px-6 order-1 sm:order-2 mb-3 sm:mb-0">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
