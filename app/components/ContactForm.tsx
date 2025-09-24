"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact";
}

export default function ContactForm({
  title,
  subtitle,
  variant = "default",
}: ContactFormProps) {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (variant === "compact") {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-[#2d3748] font-poppins text-xl font-semibold mb-4">
          {title || t("contact.title")}
        </h3>
        {subtitle && (
          <p className="text-[#4a5568] font-inter text-sm mb-6">{subtitle}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder={t("contact.form.name")}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder={t("contact.form.message")}
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#84cc16] text-white py-3 px-6 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300"
          >
            {t("contact.form.submit")}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-[#2d3748] font-poppins text-3xl font-semibold mb-4">
          {title || t("contact.title")}
        </h2>
        {subtitle && (
          <p className="text-[#4a5568] font-inter text-base">{subtitle}</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
              {t("contact.form.email")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
            {t("contact.form.company")}
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
            {t("contact.form.message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#84cc16] text-white py-3 px-6 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300"
        >
          {t("contact.form.submit")}
        </button>
      </form>
    </div>
  );
}
