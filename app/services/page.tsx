"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LearnMoreButton from "../components/LearnMoreButton";
import { useI18n } from "../lib/i18n";

export default function ServicesPage() {
  const { t } = useI18n();

  // Same services array as home page for hero cards
  const services = [
    {
      title: "Turnkey business and taxes",
      description: "Learn more",
      image: "/heroCards/pawns.svg",
      slug: "corporate-structuring",
    },
    {
      title: "Licensing and regulations",
      description: "Learn more",
      image: "/heroCards/contract.svg",
      slug: "licensing",
    },
    {
      title: "IT companies support",
      description: "Learn more",
      image: "/heroCards/hacker.svg",
      slug: "it-support",
    },
    {
      title: "Intellectual property",
      description: "Learn more",
      image: "/heroCards/biometric.svg",
      slug: "ip-protection",
    },
    {
      title: "Confidentiality and migration",
      description: "Learn more",
      image: "/heroCards/gamer.svg",
      slug: "gamedev-support",
    },
    {
      title: "Disputes and arbitration",
      description: "Learn more",
      image: "/heroCards/justice.svg",
      slug: "international-arbitration",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Services Grid - Hero Cards only */}
      <section className="">
        <div className="w-full">
          {/* First Row - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-0">
            {services.slice(0, 4).map((service, index) => {
              const isLeftCard = index % 2 === 0;
              const isFirstTwoCards = index < 2;
              const textColor = isFirstTwoCards
                ? "text-[#2D3748]"
                : "text-white";

              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="relative bg-white overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[600px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-8 ${
                        isLeftCard ? "left-8" : "right-8"
                      } ${textColor} max-w-[280px]`}
                    >
                      <h3 className="font-poppins text-3xl font-bold mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <LearnMoreButton className={textColor} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Second Row - 2 Columns */}
          <div className="grid grid-cols-2 gap-0">
            {services.slice(4, 6).map((service, index) => {
              const isLeftCard = index % 2 === 0;
              return (
                <Link
                  key={index + 4}
                  href={`/services/${service.slug}`}
                  className="relative bg-white overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[600px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-8 ${
                        isLeftCard ? "left-8" : "right-8"
                      } text-white max-w-[35%]`}
                    >
                      <h3 className="font-poppins text-[54px] leading-[56px] font-bold mb-4">
                        {service.title}
                      </h3>
                      <LearnMoreButton />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need legal support? Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-6 border border-gray-300 rounded-lg text-center">
            <h2 className="font-poppins text-4xl font-bold text-[#2d3748] mb-6">
              Need legal support?
            </h2>
            <p className="font-inter text-lg text-[#4a5568] mb-8 mx-32">
              We respond in the most convenient way for you: email, messenger,
              phone call. Our experience will help your business spread its
              wings faster.
            </p>
            <button className="bg-[#84cc16] text-white px-8 py-4 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
