"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

export default function CompanyPage() {
  const { t } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.company") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/company-hero.jpg?width=3840"
          alt="Company overview"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 text-center text-white px-6">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            {t("company.hero.title")}
          </h1>
          <p className="font-inter text-xl md:text-2xl max-w-3xl mx-auto">
            {t("company.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        {/* About Us */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-poppins text-4xl font-bold text-[#2d3748] mb-6">
                {t("company.about.title")}
              </h2>
              <div className="space-y-6 text-[#4a5568] font-inter text-lg leading-relaxed">
                <p>{t("company.about.paragraph1")}</p>
                <p>{t("company.about.paragraph2")}</p>
                <p>{t("company.about.paragraph3")}</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/company-about.jpg?width=800"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20 bg-gray-50 rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
              {t("company.values.title")}
            </h2>
            <p className="font-inter text-lg text-[#4a5568] max-w-3xl mx-auto">
              {t("company.values.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#84cc16] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2L20.09 10.26L29 12L20.09 13.74L16 22L11.91 13.74L3 12L11.91 10.26L16 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                {t("company.values.excellence.title")}
              </h3>
              <p className="font-inter text-[#4a5568]">
                {t("company.values.excellence.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#84cc16] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 24c-6.065 0-11-4.935-11-11S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11z"
                    fill="white"
                  />
                  <path
                    d="M16 7c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                {t("company.values.integrity.title")}
              </h3>
              <p className="font-inter text-[#4a5568]">
                {t("company.values.integrity.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#84cc16] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.383 28 4 22.617 4 16S9.383 4 16 4s12 5.383 12 12-5.383 12-12 12z"
                    fill="white"
                  />
                  <path
                    d="M22 11L14 19l-4-4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                {t("company.values.innovation.title")}
              </h3>
              <p className="font-inter text-[#4a5568]">
                {t("company.values.innovation.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Our Advantages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
              {t("company.advantages.title")}
            </h2>
            <p className="font-inter text-lg text-[#4a5568] max-w-3xl mx-auto">
              {t("company.advantages.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#84cc16] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                    {t("company.advantages.expertise.title")}
                  </h3>
                  <p className="font-inter text-[#4a5568]">
                    {t("company.advantages.expertise.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#84cc16] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                    {t("company.advantages.global.title")}
                  </h3>
                  <p className="font-inter text-[#4a5568]">
                    {t("company.advantages.global.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#84cc16] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                    {t("company.advantages.efficiency.title")}
                  </h3>
                  <p className="font-inter text-[#4a5568]">
                    {t("company.advantages.efficiency.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#84cc16] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-3">
                    {t("company.advantages.personalized.title")}
                  </h3>
                  <p className="font-inter text-[#4a5568]">
                    {t("company.advantages.personalized.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
              {t("company.offices.title")}
            </h2>
            <p className="font-inter text-lg text-[#4a5568] max-w-3xl mx-auto">
              {t("company.offices.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Warsaw */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[200px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/warsaw-office.jpg?width=400"
                  alt="Warsaw office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-2">
                  {t("company.offices.warsaw.title")}
                </h3>
                <p className="font-inter text-[#4a5568] mb-3">
                  {t("company.offices.warsaw.address")}
                </p>
                <p className="font-inter text-sm text-[#4a5568] mb-4">
                  {t("company.offices.warsaw.description")}
                </p>
                <div className="text-sm text-[#4a5568]">
                  <p>
                    <strong>Phone:</strong> +48 22 123 4567
                  </p>
                  <p>
                    <strong>Email:</strong> warsaw@wolja.digital
                  </p>
                </div>
              </div>
            </div>

            {/* Tbilisi */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[200px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/tbilisi-office.jpg?width=400"
                  alt="Tbilisi office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-2">
                  {t("company.offices.tbilisi.title")}
                </h3>
                <p className="font-inter text-[#4a5568] mb-3">
                  {t("company.offices.tbilisi.address")}
                </p>
                <p className="font-inter text-sm text-[#4a5568] mb-4">
                  {t("company.offices.tbilisi.description")}
                </p>
                <div className="text-sm text-[#4a5568]">
                  <p>
                    <strong>Phone:</strong> +995 32 123 4567
                  </p>
                  <p>
                    <strong>Email:</strong> tbilisi@wolja.digital
                  </p>
                </div>
              </div>
            </div>

            {/* Limassol */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[200px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/limassol-office.jpg?width=400"
                  alt="Limassol office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-2">
                  {t("company.offices.limassol.title")}
                </h3>
                <p className="font-inter text-[#4a5568] mb-3">
                  {t("company.offices.limassol.address")}
                </p>
                <p className="font-inter text-sm text-[#4a5568] mb-4">
                  {t("company.offices.limassol.description")}
                </p>
                <div className="text-sm text-[#4a5568]">
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
        </section>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <ContactForm
            title={t("company.contact.title")}
            subtitle={t("company.contact.subtitle")}
          />
        </div>
      </div>

      {/* Floating Social Media Buttons */}
      <div className="fixed right-[90px] top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        {/* WhatsApp */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#00E510] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path
              d="M30.0683 0H29.9317C13.4009 0 0 13.4009 0 29.9317V30.0683C0 46.5991 13.4009 60 29.9317 60H30.0683C46.5991 60 60 46.5991 60 30.0683V29.9317C60 13.4009 46.5991 0 30.0683 0Z"
              fill="#00E510"
            />
            <path
              d="M35.5631 39C28.0856 39 22.002 32.5564 22 24.639C22.002 22.632 23.5455 21 25.4369 21C25.6313 21 25.8237 21.0173 26.0079 21.052C26.4132 21.1235 26.7981 21.2688 27.1522 21.4877C27.2034 21.5202 27.2382 21.5722 27.2464 21.6329L28.0365 26.9061C28.0467 26.9689 28.0283 27.0296 27.9894 27.0751C27.5534 27.5866 26.9966 27.9551 26.3764 28.1393L26.0776 28.2282L26.1901 28.5338C27.2095 31.282 29.2851 33.4775 31.8827 34.5612L32.1713 34.6826L32.2553 34.3662C32.4292 33.7095 32.7772 33.1199 33.2603 32.6583C33.2951 32.6236 33.3422 32.6063 33.3893 32.6063C33.3995 32.6063 33.4098 32.6063 33.422 32.6084L38.4023 33.445C38.4616 33.4559 38.5108 33.4905 38.5415 33.5447C38.7462 33.9197 38.8833 34.3293 38.9529 34.7585C38.9857 34.9492 39 35.1508 39 35.361C39 37.3658 37.4586 38.9978 35.5631 39Z"
              fill="#FDFDFD"
            />
          </svg>
        </div>

        {/* Telegram */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#00B0F2] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path
              d="M30.0683 0H29.9317C13.4009 0 0 13.4009 0 29.9317V30.0683C0 46.5991 13.4009 60 29.9317 60H30.0683C46.5991 60 60 46.5991 60 30.0683V29.9317C60 13.4009 46.5991 0 30.0683 0Z"
              fill="#00B0F2"
            />
            <path
              d="M10.9721 28.6753C11.057 28.6337 11.1421 28.5941 11.2249 28.5567C12.6651 27.9032 14.1245 27.2913 15.5817 26.6794C15.6603 26.6794 15.792 26.5899 15.8663 26.5608C15.9789 26.5129 16.0915 26.4671 16.2041 26.4192L16.852 26.1466C17.2854 25.9655 17.7166 25.7845 18.1499 25.6034C19.0145 25.2413 19.879 24.8791 20.7436 24.5149C22.4727 23.7906 24.204 23.0643 25.9332 22.34C27.6623 21.6157 29.3935 20.8894 31.1227 20.1651C32.8518 19.4408 34.5831 18.7145 36.3122 17.9902C38.0413 17.2659 39.7726 16.5396 41.5018 15.8153C41.8863 15.653 42.3026 15.4116 42.7147 15.3408C43.061 15.2804 43.3987 15.1639 43.7471 15.0994C44.4077 14.9766 45.1363 14.9266 45.7693 15.1951C45.9881 15.2888 46.1899 15.4199 46.3578 15.5843C47.1607 16.3627 47.0481 17.6406 46.8782 18.7353C45.695 26.3651 44.5118 33.9971 43.3265 41.6269C43.165 42.6738 42.9441 43.8226 42.1008 44.4844C41.387 45.0443 40.3716 45.1067 39.4901 44.8695C38.6085 44.6301 37.831 44.1285 37.0684 43.6353C33.9054 41.5832 30.7403 39.5311 27.5773 37.479C26.8253 36.992 25.9884 36.3551 25.9969 35.4706C26.0012 34.9378 26.3261 34.4633 26.6575 34.0408C29.4063 30.5276 33.3723 28.1134 36.3228 24.7626C36.7392 24.2901 37.0663 23.4368 36.4949 23.1642C36.155 23.0018 35.7641 23.2225 35.454 23.4327C31.5539 26.0863 27.6559 28.7419 23.7558 31.3955C22.4834 32.2613 21.1494 33.1521 19.6157 33.3644C18.2434 33.5558 16.8627 33.1812 15.535 32.7983C14.4219 32.4777 13.3109 32.1489 12.2041 31.8097C11.6157 31.6307 11.0082 31.4371 10.5536 31.0313C10.099 30.6254 9.83777 29.9428 10.1118 29.4017C10.2839 29.0624 10.6174 28.8481 10.9679 28.6732L10.9721 28.6753Z"
              fill="#FEFFFC"
            />
          </svg>
        </div>

        {/* Support Button */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#84cc16] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M8.75 8.75L21.25 21.25M8.75 21.25L21.25 8.75"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  );
}
