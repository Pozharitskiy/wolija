"use client";

interface ContentItem {
  type: string;
  text?: string;
  items?: string[];
}

interface ContentRendererProps {
  content: ContentItem[];
}

export default function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        switch (item.type) {
          case "title":
            return (
              <h1
                key={index}
                className="text-[#2d3748] font-poppins text-[54px] font-semibold leading-[56px]"
              >
                {item.text}
              </h1>
            );

          case "subtitle":
            return (
              <h2
                key={index}
                className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px] mt-8 mb-3"
              >
                {item.text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="text-[#4a5568] font-inter text-base leading-[19px] mb-3"
              >
                {item.text}
              </p>
            );

          case "list":
            return (
              <ul key={index} className="space-y-2 ml-4 mb-4">
                {item.items?.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="text-[#4a5568] font-inter text-base leading-[19px] flex items-start"
                  >
                    <span className="text-[#84cc16] mr-3 mt-1">•</span>
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
