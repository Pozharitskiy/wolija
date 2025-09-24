"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

export default function PrivacyPolicyPage() {
  const { t } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.privacyPolicy") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-8">
          {t("privacy.title")}
        </h1>

        <div className="prose prose-lg max-w-none text-[#4a5568]">
          <p className="text-sm text-[#4a5568] mb-8">
            {t("privacy.lastUpdated")} January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("privacy.sections.overview.title")}
            </h2>
            <p>{t("privacy.sections.overview.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("privacy.sections.dataCollection.title")}
            </h2>
            <p>{t("privacy.sections.dataCollection.intro")}</p>
            <ul className="space-y-2 mt-4">
              <li>• {t("privacy.sections.dataCollection.personalInfo")}</li>
              <li>• {t("privacy.sections.dataCollection.contactInfo")}</li>
              <li>• {t("privacy.sections.dataCollection.businessInfo")}</li>
              <li>• {t("privacy.sections.dataCollection.technicalInfo")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("privacy.sections.dataUse.title")}
            </h2>
            <p>{t("privacy.sections.dataUse.intro")}</p>
            <ul className="space-y-2 mt-4">
              <li>• {t("privacy.sections.dataUse.services")}</li>
              <li>• {t("privacy.sections.dataUse.communication")}</li>
              <li>• {t("privacy.sections.dataUse.improvement")}</li>
              <li>• {t("privacy.sections.dataUse.legal")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("privacy.sections.dataSharing.title")}
            </h2>
            <p>{t("privacy.sections.dataSharing.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("privacy.sections.rights.title")}
            </h2>
            <p>{t("privacy.sections.rights.intro")}</p>
            <ul className="space-y-2 mt-4">
              <li>• {t("privacy.sections.rights.access")}</li>
              <li>• {t("privacy.sections.rights.rectification")}</li>
              <li>• {t("privacy.sections.rights.erasure")}</li>
              <li>• {t("privacy.sections.rights.portability")}</li>
              <li>• {t("privacy.sections.rights.objection")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("privacy.sections.contact.title")}
            </h2>
            <p>{t("privacy.sections.contact.content")}</p>
            <p className="mt-4">
              <strong>Email:</strong> privacy@wolja.digital
              <br />
              <strong>Address:</strong> {t("privacy.sections.contact.address")}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
