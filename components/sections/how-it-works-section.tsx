export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Submit your Resume",
      description: "Upload your current resume or start from scratch.",
    },
    {
      number: 2,
      title: "We do the hard work",
      description: "Our experts optimize your resume for ATS.",
    },
    {
      number: 3,
      title: "You receive your job-ready resume",
      description: "Get a professionally designed resume.",
    },
    {
      number: 4,
      title: "We get you interviews",
      description: "Start receiving interview calls.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 md:mb-12 text-blue-900">How we work?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center p-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg sm:text-xl mb-4">
              {step.number}
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-blue-900">{step.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
