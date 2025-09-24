"use client";

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  slug: string;
}

export default function ProjectCard({ title, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
        {/* Title */}
        <h3 className="font-poppins text-lg font-semibold text-[#2d3748] mb-6 leading-tight">
          {title}
        </h3>

        {/* Learn More with Icon */}
        <div className="flex items-center gap-3 text-[#4a5568] font-inter font-medium">
          <div className="w-8 h-8 rounded-full bg-[#84cc16] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M4.5 9L7.5 6L4.5 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>Learn more</span>
        </div>
      </div>
    </Link>
  );
}
