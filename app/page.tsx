"use client";

import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ProjectTile from "./components/ProjectTile";
import BlogCard from "./components/BlogCard";
import ContactForm from "./components/ContactForm";
import InsightCard from "./components/InsightCard";
import ProjectCard from "./components/ProjectCard";
import { useI18n } from "./lib/i18n";

export default function HomePage() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log("Video element dimensions:", {
        width: video.offsetWidth,
        height: video.offsetHeight,
        readyState: video.readyState,
      });

      const playVideo = async () => {
        try {
          console.log("Playing video...");
          await video.play();
          console.log("Video is playing, current time:", video.currentTime);
        } catch (error) {
          console.error("Video play failed:", error);
        }
      };

      // Simple approach - just try to play when loaded
      video.addEventListener("loadeddata", playVideo);
      video.load();
    }
  }, []);

  // Sample data - in a real app, this would come from a CMS or API
  const services = [
    {
      title: "Corporate structuring",
      description: "Learn more",
      image: "/heroCards/pawns.svg",
      slug: "corporate-structuring",
    },
    {
      title: "Licensing",
      description: "Learn more",
      image: "/heroCards/contract.svg",
      slug: "licensing",
    },
    {
      title: "IT support",
      description: "Learn more",
      image: "/heroCards/hacker.svg",
      slug: "it-support",
    },
    {
      title: "IP protection",
      description: "Learn more",
      image: "/heroCards/biometric.svg",
      slug: "ip-protection",
    },
    {
      title: "Gamedev support",
      description: "Learn more",
      image: "/heroCards/gamer.svg",
      slug: "gamedev-support",
    },
    {
      title: "International arbitration",
      description: "Learn more",
      image: "/heroCards/justice.svg",
      slug: "international-arbitration",
    },
    {
      title: "Migration private",
      description: "Learn more",
      image: "/heroCards/travel.svg",
      slug: "migration-private",
    },
  ];

  const featuredProjects = [
    {
      title:
        "Low-Tax Strategic Structuring in Georgia and Uzbekistan IT Park for International Outsourcing Company",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-1.jpg?width=400",
      slug: "georgia-uzbekistan-structuring",
      category: "Corporate Structuring",
    },
    {
      title: "Stockholm Arbitration (SCC): Complex Gamedev Investment Dispute",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-2.jpg?width=400",
      slug: "stockholm-arbitration-gamedev",
      category: "International Arbitration",
    },
    {
      title:
        "Tax Effective Structure via Georgia Virtual Zone for Fintech Company",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-3.jpg?width=400",
      slug: "georgia-virtual-zone-fintech",
      category: "Tax Structuring",
    },
    {
      title:
        "Vilnius Arbitration (VCCA): Protecting British Fintech Company Interests in Software Development Contract",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-4.jpg?width=400",
      slug: "vilnius-arbitration-fintech",
      category: "International Arbitration",
    },
    {
      title:
        "Accelerated EU Residency Through Hungarian Entrepreneur Programme",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-5.jpg?width=400",
      slug: "hungarian-entrepreneur-residency",
      category: "Migration",
    },
    {
      title: "Gamedev Studio Relocation and IP Protection Strategy in EU",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-6.jpg?width=400",
      slug: "gamedev-studio-relocation",
      category: "IP Protection",
    },
    {
      title: "Remote-Renewable French Residency for Digital Entrepreneurs",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-7.jpg?width=400",
      slug: "french-residency-digital",
      category: "Migration",
    },
    {
      title: "Strategic IP Portfolio Management for Licensed iGaming Operator",
      description: "Learn more",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-8.jpg?width=400",
      slug: "igaming-ip-portfolio",
      category: "IP Protection",
    },
  ];

  const latestInsights = [
    {
      title: "Guide to Obtaining a Vanuatu Gaming License",
      excerpt:
        "Vanuatu, a Pacific island nation, has become a premier online gaming licensing jurisdiction. Through its rigorous system of regulation, favorable tax regime, and simplified application procedure, the Vanuatu Interactive Gaming License (VIGL) has become a viable choice for operators seeking to access international iGaming... read more",
      slug: "vanuatu-gaming-license-guide",
      date: "21 Aug 2025",
      tags: ["Company Structuring", "Crypto", "Cyber", "iGaming", "Gamedev"],
    },
    {
      title: "Guide to Obtaining a Vanuatu Gaming License",
      excerpt:
        "Vanuatu, a Pacific island nation, has become a premier online gaming licensing jurisdiction. Through its rigorous system of regulation, favorable tax regime, and simplified application procedure, the Vanuatu Interactive Gaming License (VIGL) has become a viable choice for operators seeking to access international iGaming... read more",
      slug: "vanuatu-gaming-license-guide-2",
      date: "21 Aug 2025",
      tags: ["Company Structuring", "Crypto", "Cyber", "iGaming", "Gamedev"],
    },
    {
      title: "Guide to Obtaining a Vanuatu Gaming License",
      excerpt:
        "Vanuatu, a Pacific island nation, has become a premier online gaming licensing jurisdiction. Through its rigorous system of regulation, favorable tax regime, and simplified application procedure, the Vanuatu Interactive Gaming License (VIGL) has become a viable choice for operators seeking to access international iGaming... read more",
      slug: "vanuatu-gaming-license-guide-3",
      date: "21 Aug 2025",
      tags: ["Company Structuring", "Crypto", "Cyber", "iGaming", "Gamedev"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          className="absolute inset-0 object-cover"
          style={{
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <source src="/WoljaDigital.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="relative text-center text-white px-6"
          style={{ zIndex: 3 }}
        >
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6 px-32 leading-tight">
            Legal Support for your Business with Wolja Digital
          </h1>
        </div>
      </section>

      {/* Services Grid */}
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
              const buttonBgColor = isFirstTwoCards
                ? "bg-[#2D3748] bg-opacity-20"
                : "bg-white bg-opacity-20";

              return (
                <div
                  key={index}
                  className="relative bg-white overflow-hidden shadow-lg group"
                >
                  <div className="relative h-[300px]">
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
                      <div className="flex items-center gap-2 text-base font-medium">
                        <span>Learn more</span>
                        <div
                          className={`w-8 h-8 rounded-full ${buttonBgColor} flex items-center justify-center`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 12L10 8L6 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row - 2 Columns */}
          <div className="grid grid-cols-2 gap-0">
            {services.slice(4, 6).map((service, index) => {
              const isLeftCard = index % 2 === 0;
              return (
                <div
                  key={index + 4}
                  className="relative bg-white overflow-hidden shadow-lg group"
                >
                  <div className="relative h-[300px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-8 ${
                        isLeftCard ? "left-8" : "right-8"
                      } text-white max-w-[280px]`}
                    >
                      <h3 className="font-poppins text-3xl font-bold mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 text-base font-medium">
                        <span>Learn more</span>
                        <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 12L10 8L6 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Third Row - 1 Big Image */}
          {services[6] && (
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-[400px]">
                <img
                  src={services[6].image}
                  alt={services[6].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 text-white max-w-[400px]">
                  <h3 className="font-poppins text-4xl font-bold mb-4 leading-tight">
                    {services[6].title}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <span>Learn more</span>
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-[#2d3748]">
              Latest insights
            </h2>
            <a
              href="/blog"
              className="text-[#84cc16] font-inter font-medium hover:underline"
            >
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestInsights.map((post, index) => (
              <InsightCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-[#2d3748]">
              Projects
            </h2>
            <a
              href="/projects"
              className="text-[#84cc16] font-inter font-medium hover:underline"
            >
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 8).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-20 px-6 bg-gray-100 relative"
        style={{
          backgroundImage: "url('/handshake.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="font-poppins text-4xl font-bold text-[#2d3748] mb-6">
            Got New Project?
          </h2>
          <p className="font-inter text-lg text-[#4a5568] mb-8 max-w-2xl mx-auto">
            Partner with us for expert guidance and strategies that drive growth
            and success.
          </p>
          <button className="bg-[#84cc16] text-white px-8 py-4 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
