import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PRISM by VISTA",
    short_name: "PRISM",
    description: "Voice data assistant for Meta Quest. Answers, charts and 3D views computed from your own data.",
    start_url: "/",
    display: "standalone",
    background_color: "#14060a",
    theme_color: "#14060a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
