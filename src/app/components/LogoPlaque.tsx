import Image from "next/image";

interface LogoPlaqueProps {
  src: string;
  alt: string;
  size: "project" | "education" | "detail";
  className?: string;
}

const heights: Record<LogoPlaqueProps["size"], number> = {
  project: 22,
  education: 30,
  detail: 34,
};

export default function LogoPlaque({ src, alt, size, className = "" }: LogoPlaqueProps) {
  const h = heights[size];
  return (
    <span className={`logo-plaque ${className}`}>
      <Image src={src} alt={alt} height={h} width={h * 3} style={{ height: h, width: "auto", maxWidth: size === "education" ? 130 : 64 }} />
    </span>
  );
}
