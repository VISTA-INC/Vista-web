import Image from "next/image";

export default function Logo({ tone = "light", height = 40 }: { tone?: "light" | "dark"; height?: number }) {
  const width = Math.round(height * (1160 / 418));
  return (
    <Image
      src={tone === "dark" ? "/brand/prism-logo-compact-dark.svg" : "/brand/prism-logo-compact-light.svg"}
      alt="PRISM"
      width={width}
      height={height}
      unoptimized
      priority
    />
  );
}
