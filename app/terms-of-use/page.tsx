"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

export default function TermsOfUsePage() {
  const { t } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.termsOfUse") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-8">
          {t("terms.title")}
        </h1>

        <div className="prose prose-lg max-w-none text-[#4a5568]">
          <p className="text-sm text-[#4a5568] mb-8">
            {t("terms.lastUpdated")} January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.acceptance.title")}
            </h2>
            <p>{t("terms.sections.acceptance.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.services.title")}
            </h2>
            <p>{t("terms.sections.services.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.obligations.title")}
            </h2>
            <p>{t("terms.sections.obligations.intro")}</p>
            <ul className="space-y-2 mt-4">
              <li>• {t("terms.sections.obligations.accurate")}</li>
              <li>• {t("terms.sections.obligations.lawful")}</li>
              <li>• {t("terms.sections.obligations.confidential")}</li>
              <li>• {t("terms.sections.obligations.prompt")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.fees.title")}
            </h2>
            <p>{t("terms.sections.fees.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.confidentiality.title")}
            </h2>
            <p>{t("terms.sections.confidentiality.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.limitation.title")}
            </h2>
            <p>{t("terms.sections.limitation.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.termination.title")}
            </h2>
            <p>{t("terms.sections.termination.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.governing.title")}
            </h2>
            <p>{t("terms.sections.governing.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("terms.sections.contact.title")}
            </h2>
            <p>{t("terms.sections.contact.content")}</p>
            <p className="mt-4">
              <strong>Email:</strong> legal@wolja.digital
              <br />
              <strong>Address:</strong> {t("terms.sections.contact.address")}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
