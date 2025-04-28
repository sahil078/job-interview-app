import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-white mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Land job interviews
          <br />
          10x faster
        </h1>
        <p className="text-base sm:text-lg mb-8 text-blue-100 max-w-md">
          Our professional resume writing services help you stand out and get noticed by employers.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-2 rounded-full w-full sm:w-auto">
          Get Started
        </Button>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-xs">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-blue-600 font-bold mb-2 text-sm sm:text-base">
              John Peters
              <br />
              Software Engineer
            </h3>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gray-800 text-white p-1.5 sm:p-2 rounded-full">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
