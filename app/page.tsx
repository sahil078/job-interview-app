import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import AboutUsSection from "@/components/sections/about-us-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import PricingSection from "@/components/sections/pricing-section"
import SpecialOfferBanner from "@/components/sections/special-offer-banner"
import ResumeServicesSection from "@/components/sections/resume-services-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-blue-600 to-blue-900">
        <Navbar />
        <HeroSection />
      </div>
      <HowItWorksSection />
      <AboutUsSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <SpecialOfferBanner />
      <ResumeServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
