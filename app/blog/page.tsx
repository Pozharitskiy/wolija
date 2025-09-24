"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

export default function BlogPage() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.blog") },
  ];

  const categories = [
    { id: "all", label: t("blog.categories.all") },
    { id: "regulation", label: t("blog.categories.regulation") },
    { id: "tax", label: t("blog.categories.tax") },
    { id: "corporate", label: t("blog.categories.corporate") },
    { id: "technology", label: t("blog.categories.technology") },
    { id: "compliance", label: t("blog.categories.compliance") },
  ];

  // Sample blog posts - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      title: t("blog.posts.dsa2024.title"),
      excerpt: t("blog.posts.dsa2024.excerpt"),
      slug: "eu-digital-services-act-2024",
      date: "Jan 15, 2024",
      category: "regulation",
      readTime: "5 min",
    },
    {
      title: t("blog.posts.taxOptimization.title"),
      excerpt: t("blog.posts.taxOptimization.excerpt"),
      slug: "tax-optimization-strategies",
      date: "Jan 10, 2024",
      category: "tax",
      readTime: "7 min",
    },
    {
      title: t("blog.posts.corporateStructuring.title"),
      excerpt: t("blog.posts.corporateStructuring.excerpt"),
      slug: "corporate-structuring-best-practices",
      date: "Jan 5, 2024",
      category: "corporate",
      readTime: "6 min",
    },
    {
      title: t("blog.posts.aiCompliance.title"),
      excerpt: t("blog.posts.aiCompliance.excerpt"),
      slug: "ai-legal-framework",
      date: "Dec 28, 2023",
      category: "technology",
      readTime: "8 min",
    },
    {
      title: t("blog.posts.gdprUpdate.title"),
      excerpt: t("blog.posts.gdprUpdate.excerpt"),
      slug: "gdpr-updates-2024",
      date: "Dec 20, 2023",
      category: "compliance",
      readTime: "4 min",
    },
    {
      title: t("blog.posts.fintech.title"),
      excerpt: t("blog.posts.fintech.excerpt"),
      slug: "fintech-regulatory-landscape",
      date: "Dec 15, 2023",
      category: "regulation",
      readTime: "9 min",
    },
    {
      title: t("blog.posts.crossBorder.title"),
      excerpt: t("blog.posts.crossBorder.excerpt"),
      slug: "cross-border-tax-planning",
      date: "Dec 10, 2023",
      category: "tax",
      readTime: "6 min",
    },
    {
      title: t("blog.posts.saasLegal.title"),
      excerpt: t("blog.posts.saasLegal.excerpt"),
      slug: "saas-legal-considerations",
      date: "Dec 5, 2023",
      category: "technology",
      readTime: "7 min",
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            {t("blog.hero.title")}
          </h1>
          <p className="font-inter text-xl md:text-2xl max-w-3xl mx-auto">
            {t("blog.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="font-poppins text-2xl font-bold text-[#2d3748] mb-6">
            {t("blog.filter.title")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#84cc16] text-white"
                    : "bg-gray-100 text-[#4a5568] hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-0">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              category={
                categories.find((cat) => cat.id === post.category)?.label ||
                post.category
              }
              readTime={post.readTime}
              variant="list"
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#84cc16] text-white px-8 py-4 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300">
            {t("blog.loadMore")}
          </button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
            {t("blog.newsletter.title")}
          </h2>
          <p className="font-inter text-lg text-[#4a5568] mb-8">
            {t("blog.newsletter.description")}
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder={t("blog.newsletter.placeholder")}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
            />
            <button className="bg-[#84cc16] text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300">
              {t("blog.newsletter.subscribe")}
            </button>
          </div>
        </div>
      </section>

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
