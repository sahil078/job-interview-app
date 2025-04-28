import Image from "next/image"
import type { TeamMember } from "@/types/team-member"

export default function AboutUsSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Smith",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=120&width=120",
      description:
        "John has over 15 years of experience in recruitment and HR. He founded JobMagnet to help job seekers navigate the complex job market and land their dream jobs faster.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Head of Resume Writing",
      image: "/placeholder.svg?height=120&width=120",
      description:
        "Sarah is a certified resume writer with expertise in creating ATS-friendly resumes. She has helped thousands of professionals secure interviews at top companies across various industries.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 md:mb-12 text-center">About Us</h2>

        <div className="space-y-8 md:space-y-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center sm:text-left"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-blue-400 flex-shrink-0">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-0">{member.name}</h3>
                <p className="text-blue-200 mb-2 text-sm sm:text-base">{member.role}</p>
                <p className="text-blue-100 text-sm sm:text-base">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 md:mt-12 text-blue-200 italic text-sm sm:text-base">
          "We're on a mission to make job hunting easier"
        </p>
      </div>
    </section>
  )
}
