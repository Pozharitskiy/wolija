"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import FloatingSocialButtons from "../components/FloatingSocialButtons";
import { useI18n } from "../lib/i18n";

export default function CompanyPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Company Header Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold text-[#2d3748] mb-8">
            Company
          </h1>

          <div className="max-w-4xl mb-12">
            <p className="font-inter text-lg text-[#4a5568] mb-6">
              Wolja Digital is the full cycle legal agency.
            </p>
            <p className="font-inter text-lg text-[#4a5568] mb-6">
              Our mission is to give you freedom for growth and development of
              your business. We take responsibility for all legal issues and
              corporate structuring of business, all the time it conveys tasks
              to you, remember: all the details, always looking for solutions to
              protect your business interests.
            </p>
            <p className="font-inter text-lg text-[#4a5568]">
              We work with IT start-ups and tech sphere because what makes us
              passionate is not just our work, but also our vision. And our
              vision is to try to add to the past by law, but to support and
              promote innovations.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="relative mb-16 h-32 lg:h-24">
            <div className="absolute left-0 top-0 bg-white border-2 border-[#84cc16] rounded-lg p-4 text-center w-48 z-10">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">€13m</div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                is the overall amount of debt collected with our help
              </div>
            </div>
            <div className="absolute left-36 lg:left-44 top-6 lg:top-0 bg-white border-2 border-[#84cc16] rounded-lg p-4 text-center w-48 z-20">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">20+</div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                positive outcomes of international arbitrary cases
              </div>
            </div>
            <div className="absolute left-72 lg:left-80 top-0 bg-white border-2 border-[#84cc16] rounded-lg p-4 text-center w-48 z-30">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">3</div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                years of company practice
              </div>
            </div>
            <div className="absolute left-[108px] lg:left-[316px] top-6 lg:top-0 bg-white border-2 border-[#84cc16] rounded-lg p-4 text-center w-48 z-40">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">130</div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                digital projects supported
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="flex items-start">
              <ContactForm variant="compact" />
            </div>

            {/* World Map */}
            <div className="bg-white p-6 flex items-center justify-center overflow-hidden min-w-0 lg:min-w-[1000px]">
              <img
                src="/map.svg"
                alt="Global presence map showing office locations"
                className="w-full h-auto object-contain min-h-[571px] min-w-[1000px]"
              />
            </div>
          </div>

          {/* Office Locations with Maps */}
          <div className="mt-16">
            <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-8 text-center">
              Our Office Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="h-[250px] flex items-center justify-center">
                <img
                  src="/maps/warsaw.svg"
                  alt="Warsaw office location map"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="h-[250px] flex items-center justify-center">
                <img
                  src="/maps/tbilisi.svg"
                  alt="Tbilisi office location map"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="h-[250px] flex items-center justify-center">
                <img
                  src="/maps/limassol.svg"
                  alt="Limassol office location map"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingSocialButtons />

      <Footer />
    </div>
  );
}
