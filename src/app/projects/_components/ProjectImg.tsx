import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption: string;
  className?: "shot-wide" | "shot-tall";
}

export default function ProjectImg({ src, alt, caption, className = "shot-wide" }: Props) {
  const isSvg = src.endsWith(".svg");
  return (
    <div>
      <div className={`shot ${className}`} style={{ position: "relative" }}>
        {isSvg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        ) : (
          <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 880px) 100vw, 50vw" />
        )}
      </div>
      <div className="shot-cap">{caption}</div>
    </div>
  );
}
