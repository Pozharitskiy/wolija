"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import Breadcrumb from "../../components/Breadcrumb";
import ContentRenderer from "../../components/ContentRenderer";
import { useI18n } from "../../lib/i18n";
import servicesData from "../../data/services.json";

export default function ServicePage() {
  const { t } = useI18n();
  const params = useParams();
  const slug = params.slug as string;

  // Get service data from JSON file
  const currentService = servicesData[slug as keyof typeof servicesData];

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.services"), href: "/services" },
    { label: currentService?.title || "Service" },
  ];

  if (!currentService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="w-full h-[500px] relative">
        <img
          src={currentService.heroImage}
          alt={currentService.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        {/* Dynamic Content */}
        <div className="mb-16">
          <ContentRenderer content={currentService.content} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
