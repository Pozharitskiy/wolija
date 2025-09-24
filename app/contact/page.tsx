"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.contact") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            {t("contact.hero.title")}
          </h1>
          <p className="font-inter text-xl md:text-2xl max-w-3xl mx-auto">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-8">
              {t("contact.info.title")}
            </h2>

            <div className="space-y-8">
              {/* Warsaw Office */}
              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                  {t("contact.offices.warsaw.title")}
                </h3>
                <div className="space-y-2 text-[#4a5568]">
                  <p>{t("contact.offices.warsaw.address")}</p>
                  <p>
                    <strong>Phone:</strong> +48 22 123 4567
                  </p>
                  <p>
                    <strong>Email:</strong> warsaw@wolja.digital
                  </p>
                </div>
              </div>

              {/* Tbilisi Office */}
              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                  {t("contact.offices.tbilisi.title")}
                </h3>
                <div className="space-y-2 text-[#4a5568]">
                  <p>{t("contact.offices.tbilisi.address")}</p>
                  <p>
                    <strong>Phone:</strong> +995 32 123 4567
                  </p>
                  <p>
                    <strong>Email:</strong> tbilisi@wolja.digital
                  </p>
                </div>
              </div>

              {/* Limassol Office */}
              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                  {t("contact.offices.limassol.title")}
                </h3>
                <div className="space-y-2 text-[#4a5568]">
                  <p>{t("contact.offices.limassol.address")}</p>
                  <p>
                    <strong>Phone:</strong> +357 25 123 4567
                  </p>
                  <p>
                    <strong>Email:</strong> limassol@wolja.digital
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm
              title={t("contact.form.title")}
              subtitle={t("contact.form.subtitle")}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
