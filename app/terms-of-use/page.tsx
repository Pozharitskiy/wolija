"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useI18n } from "../lib/i18n";

export default function TermsOfUsePage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <h2 className="font-poppins text-xl font-semibold text-[#2d3748] mb-6">
              Legal
            </h2>
            <nav className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block py-3 px-4 text-[#4a5568] hover:text-[#2d3748] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="py-3 px-4 text-[#2d3748] bg-gray-50 rounded-lg font-medium flex items-center justify-between">
                Term of Use
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <Link
                href="/cookie-policy"
                className="block py-3 px-4 text-[#4a5568] hover:text-[#2d3748] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-2">
                Terms of Use
              </h1>
              <div className="w-16 h-1 bg-[#9AE6B4] rounded-full mb-6"></div>
            </div>

            <div className="mb-8">
              <h2 className="font-poppins text-xl font-semibold text-[#2d3748] mb-2">
                Terms of Use
              </h2>
              <p className="text-[#4a5568] mb-6">
                Our terms for accessing and using the website
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-poppins text-lg font-semibold text-[#2d3748] mb-3">
                  Terms of Use
                </h3>
                <p className="text-[#4a5568] leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>

              <div>
                <h3 className="font-poppins text-lg font-semibold text-[#2d3748] mb-3">
                  Terms of Use
                </h3>
                <p className="text-[#4a5568] leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>

            {/* Agree Button */}
            <div className="flex justify-center">
              <button className="bg-[#9AE6B4] hover:bg-[#81D4A9] text-white font-semibold py-3 px-12 rounded-lg transition-colors">
                Agree
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
