"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

export default function CookiePolicyPage() {
  const { t } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.cookiePolicy") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-8">
          {t("cookies.title")}
        </h1>

        <div className="prose prose-lg max-w-none text-[#4a5568]">
          <p className="text-sm text-[#4a5568] mb-8">
            {t("cookies.lastUpdated")} January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("cookies.sections.overview.title")}
            </h2>
            <p>{t("cookies.sections.overview.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("cookies.sections.types.title")}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-inter text-lg font-semibold text-[#2d3748] mb-2">
                  {t("cookies.sections.types.essential.title")}
                </h3>
                <p>{t("cookies.sections.types.essential.content")}</p>
              </div>
              <div>
                <h3 className="font-inter text-lg font-semibold text-[#2d3748] mb-2">
                  {t("cookies.sections.types.performance.title")}
                </h3>
                <p>{t("cookies.sections.types.performance.content")}</p>
              </div>
              <div>
                <h3 className="font-inter text-lg font-semibold text-[#2d3748] mb-2">
                  {t("cookies.sections.types.functional.title")}
                </h3>
                <p>{t("cookies.sections.types.functional.content")}</p>
              </div>
              <div>
                <h3 className="font-inter text-lg font-semibold text-[#2d3748] mb-2">
                  {t("cookies.sections.types.targeting.title")}
                </h3>
                <p>{t("cookies.sections.types.targeting.content")}</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("cookies.sections.control.title")}
            </h2>
            <p>{t("cookies.sections.control.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("cookies.sections.thirdParty.title")}
            </h2>
            <p>{t("cookies.sections.thirdParty.content")}</p>
          </section>

          <section className="mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#2d3748] mb-4">
              {t("cookies.sections.contact.title")}
            </h2>
            <p>{t("cookies.sections.contact.content")}</p>
            <p className="mt-4">
              <strong>Email:</strong> privacy@wolja.digital
              <br />
              <strong>Address:</strong> {t("cookies.sections.contact.address")}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
