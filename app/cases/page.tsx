"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

interface CaseSection {
  id: string;
  title: string;
  description: string;
}

export default function CasesPage() {
  const { t } = useI18n();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.cases") },
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const caseSections: CaseSection[] = [
    {
      id: "turnkey-business",
      title: t("cases.sections.turnkeyBusiness.title"),
      description: t("cases.sections.turnkeyBusiness.description"),
    },
    {
      id: "licensing-regulations",
      title: t("cases.sections.licensingRegulations.title"),
      description: t("cases.sections.licensingRegulations.description"),
    },
    {
      id: "it-support",
      title: t("cases.sections.itSupport.title"),
      description: t("cases.sections.itSupport.description"),
    },
    {
      id: "intellectual-property",
      title: t("cases.sections.intellectualProperty.title"),
      description: t("cases.sections.intellectualProperty.description"),
    },
    {
      id: "disputes-arbitration",
      title: t("cases.sections.disputesArbitration.title"),
      description: t("cases.sections.disputesArbitration.description"),
    },
    {
      id: "confidentiality-migration",
      title: t("cases.sections.confidentialityMigration.title"),
      description: t("cases.sections.confidentialityMigration.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        {/* Breadcrumb */}
        <div className="w-full bg-white">
          <div className="flex flex-col items-center justify-start px-[120px] py-6">
            <div className="w-full max-w-[1200px]">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full bg-white">
          <div className="flex flex-col items-center justify-start px-[120px] py-[60px]">
            <div className="w-full max-w-[1200px]">
              <h1 className="text-[#2d3748] font-poppins text-5xl font-semibold leading-[58px] mb-6">
                {t("cases.hero.title")}
              </h1>
            </div>
          </div>
        </div>

        {/* Cases Sections */}
        <div className="w-full bg-white">
          <div className="flex flex-col items-center justify-start px-[120px] pb-[80px]">
            <div className="w-full max-w-[1200px] space-y-4">
              {caseSections.map((section) => (
                <div
                  key={section.id}
                  className="border border-[#e2e8f0] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-[#2d3748] font-poppins text-lg font-medium leading-6">
                      {section.title}
                    </h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        openSection === section.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openSection === section.id && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-[#e2e8f0] pt-4">
                        <p className="text-[#4a5568] font-inter text-base leading-6">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
