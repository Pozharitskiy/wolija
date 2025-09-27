import Image from "next/image";

interface LearnMoreButtonProps {
  className?: string;
}

export default function LearnMoreButton({
  className = "",
}: LearnMoreButtonProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xl leading-6 font-normal">Learn more</span>
      <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
        <Image
          src="/icons/arrowRight.svg"
          alt="Arrow right"
          width={32}
          height={32}
          className="text-white"
        />
      </div>
    </div>
  );
}
