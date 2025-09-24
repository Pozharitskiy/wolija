"use client";

import Link from "next/link";
import { useI18n } from "../lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full border-t border-[rgba(0,0,0,0.15)] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
                  alt="Wolja Digital Logo"
                  width={40}
                  height={37}
                  className="object-contain"
                />
              </div>
              <span className="text-[#2d3748] font-inter text-base font-medium leading-5">
                {t("footer.logo")}
              </span>
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-6">
              {t("footer.sections.navigation.title")}
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.home")}
              </Link>
              <Link
                href="/services"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.services")}
              </Link>
              <Link
                href="/team"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.team")}
              </Link>
              <Link
                href="/blog"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.blog")}
              </Link>
              <Link
                href="/company"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.company")}
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-6">
              {t("footer.sections.legal.title")}
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/privacy-policy"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.legal.links.privacy")}
              </Link>
              <Link
                href="/terms-of-use"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.legal.links.terms")}
              </Link>
              <Link
                href="/cookie-policy"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.legal.links.cookies")}
              </Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-6">
              {t("footer.sections.social.title")}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5777)">
                    <path
                      d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM9.0625 16.9738H6.6325V9.15375H9.0625V16.9738ZM7.8325 8.19375C7.065 8.19375 6.56875 7.65 6.56875 6.9775C6.56875 6.29125 7.08 5.76375 7.86375 5.76375C8.6475 5.76375 9.1275 6.29125 9.1425 6.9775C9.1425 7.65 8.6475 8.19375 7.8325 8.19375ZM17.9375 16.9738H15.5075V12.64C15.5075 11.6313 15.155 10.9462 14.2763 10.9462C13.605 10.9462 13.2063 11.41 13.03 11.8563C12.965 12.015 12.9488 12.24 12.9488 12.4638V16.9725H10.5175V11.6475C10.5175 10.6713 10.4862 9.855 10.4537 9.1525H12.565L12.6763 10.2388H12.725C13.045 9.72875 13.8288 8.97625 15.14 8.97625C16.7388 8.97625 17.9375 10.0475 17.9375 12.35V16.9738Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5777">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.linkedin")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5781)">
                    <path
                      d="M11.944 0C8.77112 0.014807 5.73324 1.28562 3.4949 3.53446C1.25656 5.78329 -3.4549e-05 8.82708 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0L11.944 0ZM16.906 7.224C17.006 7.222 17.227 7.247 17.371 7.364C17.4672 7.44672 17.5283 7.5629 17.542 7.689C17.558 7.782 17.578 7.995 17.562 8.161C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.964C14.243 9.902 14.139 9.923 14.064 9.94C13.958 9.96467 12.271 11.0797 9.003 13.285C8.523 13.615 8.089 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.56567 12.32 4.86333 12.099 5.432 11.873C8.93 10.349 11.2627 9.34433 12.43 8.859C15.762 7.473 16.455 7.232 16.906 7.224Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5781">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.telegram")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5785)">
                    <path
                      d="M23.9991 12.0735C23.9991 5.40454 18.6261 -0.00146484 11.9991 -0.00146484C5.36909 3.51563e-05 -0.00390625 5.40454 -0.00390625 12.075C-0.00390625 18.1005 4.38509 23.0955 10.1211 24.0015V15.564H7.07609V12.075H10.1241V9.41253C10.1241 6.38704 11.9166 4.71603 14.6571 4.71603C15.9711 4.71603 17.3436 4.95154 17.3436 4.95154V7.92154H15.8301C14.3406 7.92154 13.8756 8.85303 13.8756 9.80853V12.0735H17.2026L16.6716 15.5625H13.8741V24C19.6101 23.094 23.9991 18.099 23.9991 12.0735Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5785">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.facebook")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[rgba(0,0,0,0.15)] mt-16 pt-8 text-center">
          <span className="text-[#2d3748] font-inter text-sm leading-5">
            {t("footer.copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
}
