"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useI18n } from "../lib/i18n";

export default function Header() {
  const { t, language, setLanguage } = useI18n();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "pl", label: "Polski", flag: "🇵🇱" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (langCode: string) => {
    // Only switch to supported languages, fallback to English for unsupported ones
    if (langCode === "en" || langCode === "ru") {
      setLanguage(langCode as "en" | "ru");
    } else {
      setLanguage("en"); // Fallback to English for other languages
    }
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center w-full px-[120px] py-[18px] bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-[10px]">
        <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
            alt="Wolja Digital Logo"
            width={40}
            height={37}
            className="object-contain"
          />
        </div>
        <span className="text-[#2d3748] font-inter text-base font-normal leading-[19px]">
          {t("header.logo")}
        </span>
      </Link>

      {/* Navigation Menu */}
      <nav className="flex justify-center items-center gap-10">
        <Link
          href="/"
          className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
            pathname === "/" ? "border-b-2 border-[#84CC16]" : ""
          }`}
        >
          <span className="text-[#2d3748] text-sm font-normal leading-5">
            {t("header.nav.home")}
          </span>
        </Link>
        <Link
          href="/services"
          className={`flex py-1 items-center gap-1 hover:text-[#84cc16] transition-colors ${
            pathname.startsWith("/services")
              ? "border-b-2 border-[#84CC16]"
              : ""
          }`}
        >
          <span className="text-[#2d3748] text-sm font-normal leading-5">
            {t("header.nav.services")}
          </span>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M17.1004 7.45837L11.6671 12.8917C11.0254 13.5334 9.97539 13.5334 9.33372 12.8917L3.90039 7.45837"
              stroke="#2D3748"
              strokeWidth="0.833333"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          href="/team"
          className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
            pathname === "/team" ? "border-b-2 border-[#84CC16]" : ""
          }`}
        >
          <span className="text-[#2d3748] text-sm font-normal leading-5">
            {t("header.nav.team")}
          </span>
        </Link>
        <Link
          href="/cases"
          className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
            pathname.startsWith("/cases") ? "border-b-2 border-[#84CC16]" : ""
          }`}
        >
          <span className="text-[#2d3748] text-sm font-normal leading-5">
            {t("header.nav.cases")}
          </span>
        </Link>
        <Link
          href="/blog"
          className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
            pathname.startsWith("/blog") ? "border-b-2 border-[#84CC16]" : ""
          }`}
        >
          <span className="text-[#2d3748] text-sm font-normal leading-5">
            {t("header.nav.blog")}
          </span>
        </Link>
        <Link
          href="/company"
          className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
            pathname === "/company" ? "border-b-2 border-[#84CC16]" : ""
          }`}
        >
          <span className="text-[#2d3748] text-sm font-normal leading-5">
            {t("header.nav.company")}
          </span>
        </Link>
      </nav>

      {/* Search and Language */}
      <div className="flex items-center gap-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#2D3748"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#2D3748"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
            onClick={toggleDropdown}
          >
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {currentLanguage.label}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`transform transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M16.6004 7.45837L11.1671 12.8917C10.5254 13.5334 9.47539 13.5334 8.83372 12.8917L3.40039 7.45837"
                stroke="#2D3748"
                strokeWidth="0.833333"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    language === lang.code
                      ? "bg-lime-50 text-[#84cc16]"
                      : "text-[#2d3748]"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-normal">{lang.label}</span>
                  {language === lang.code && (
                    <svg
                      className="ml-auto w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
