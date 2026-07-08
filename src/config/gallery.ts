/**
 * Gallery manifest — real DopCellar Merit fieldwork photos & videos.
 * Media is served from the CDN via .asset.json pointers; edit captions/tags
 * freely, and add new items by dropping pointers under `src/assets/gallery-cdn/`.
 */
import img1 from "@/assets/gallery-cdn/image1.jpg.asset.json";
import img2 from "@/assets/gallery-cdn/image2.jpg.asset.json";
import img3 from "@/assets/gallery-cdn/image3.jpg.asset.json";
import img4 from "@/assets/gallery-cdn/image4.jpg.asset.json";
import img5 from "@/assets/gallery-cdn/image5.jpg.asset.json";
import img6 from "@/assets/gallery-cdn/image6.jpg.asset.json";
import img7 from "@/assets/gallery-cdn/image7.jpg.asset.json";
import img8 from "@/assets/gallery-cdn/image8.jpg.asset.json";
import img9 from "@/assets/gallery-cdn/image9.jpg.asset.json";
import img10 from "@/assets/gallery-cdn/image10.jpg.asset.json";
import img11 from "@/assets/gallery-cdn/image11.jpg.asset.json";
import img12 from "@/assets/gallery-cdn/image12.jpg.asset.json";
import img13 from "@/assets/gallery-cdn/image13.jpg.asset.json";
import img14 from "@/assets/gallery-cdn/image14.jpg.asset.json";
import img15 from "@/assets/gallery-cdn/image15.jpg.asset.json";
import img16 from "@/assets/gallery-cdn/image16.jpg.asset.json";
import img17 from "@/assets/gallery-cdn/image17.jpg.asset.json";
import img18 from "@/assets/gallery-cdn/image18.jpg.asset.json";
import img19 from "@/assets/gallery-cdn/image19.jpg.asset.json";
import img20 from "@/assets/gallery-cdn/image20.jpg.asset.json";
import img21 from "@/assets/gallery-cdn/image21.jpg.asset.json";
import img22 from "@/assets/gallery-cdn/image22.jpg.asset.json";

import vid1 from "@/assets/gallery-cdn/video1.mp4.asset.json";
import vid2 from "@/assets/gallery-cdn/video2.mp4.asset.json";
import vid3 from "@/assets/gallery-cdn/video3.mp4.asset.json";
import vid4 from "@/assets/gallery-cdn/video4.mp4.asset.json";
import vid5 from "@/assets/gallery-cdn/video5.mp4.asset.json";
import vid6 from "@/assets/gallery-cdn/video6.mp4.asset.json";
import vid7 from "@/assets/gallery-cdn/video7.mp4.asset.json";
import vid8 from "@/assets/gallery-cdn/video8.mp4.asset.json";
import vid9 from "@/assets/gallery-cdn/video9.mp4.asset.json";

export type GalleryCategory =
  | "CCTV & Security"
  | "Solar & Power"
  | "Electrical & Cabling"
  | "On-Site Team";

export type GalleryPhoto = {
  src: string;
  caption: string;
  category: GalleryCategory;
};

export type GalleryVideo = {
  src: string;
  caption: string;
  category: GalleryCategory;
};

/**
 * Rough categorisation based on visible subject matter. Update captions
 * freely — this file is the single source of truth for the gallery page.
 */
export const galleryPhotos: GalleryPhoto[] = [
  { src: img1.url,  caption: "DVR mainboard servicing",        category: "CCTV & Security" },
  { src: img2.url,  caption: "Structured cabling in progress", category: "Electrical & Cabling" },
  { src: img3.url,  caption: "Rack build & termination",       category: "Electrical & Cabling" },
  { src: img4.url,  caption: "Panel wiring & labelling",       category: "Electrical & Cabling" },
  { src: img5.url,  caption: "External CCTV camera install",   category: "CCTV & Security" },
  { src: img6.url,  caption: "Field diagnostics",              category: "On-Site Team" },
  { src: img7.url,  caption: "Client site walkthrough",        category: "On-Site Team" },
  { src: img8.url,  caption: "Enclosure & mounting works",     category: "Electrical & Cabling" },
  { src: img9.url,  caption: "Preventive maintenance",         category: "On-Site Team" },
  { src: img10.url, caption: "Live monitoring rack",           category: "CCTV & Security" },
  { src: img11.url, caption: "Cable routing & dressing",       category: "Electrical & Cabling" },
  { src: img12.url, caption: "Distribution board build",       category: "Electrical & Cabling" },
  { src: img13.url, caption: "Access control termination",     category: "CCTV & Security" },
  { src: img14.url, caption: "Cabinet clean-up & re-run",      category: "Electrical & Cabling" },
  { src: img15.url, caption: "Inverter panel monitoring",      category: "Solar & Power" },
  { src: img16.url, caption: "Battery bank commissioning",     category: "Solar & Power" },
  { src: img17.url, caption: "Inverter fault diagnosis",       category: "Solar & Power" },
  { src: img18.url, caption: "On-site team review",            category: "On-Site Team" },
  { src: img19.url, caption: "Camera aiming & focus",          category: "CCTV & Security" },
  { src: img20.url, caption: "NVR & workstation review",       category: "On-Site Team" },
  { src: img21.url, caption: "Perimeter camera install",       category: "CCTV & Security" },
  { src: img22.url, caption: "Site power audit",               category: "Solar & Power" },
];

export const galleryVideos: GalleryVideo[] = [
  { src: vid1.url, caption: "Full site walkthrough",       category: "On-Site Team" },
  { src: vid2.url, caption: "CCTV live feed check",         category: "CCTV & Security" },
  { src: vid3.url, caption: "Cabling & rack build",         category: "Electrical & Cabling" },
  { src: vid4.url, caption: "Installation timelapse",       category: "On-Site Team" },
  { src: vid5.url, caption: "Solar inverter status",        category: "Solar & Power" },
  { src: vid6.url, caption: "Camera commissioning",         category: "CCTV & Security" },
  { src: vid7.url, caption: "Field diagnostic",             category: "On-Site Team" },
  { src: vid8.url, caption: "Distribution board test",      category: "Electrical & Cabling" },
  { src: vid9.url, caption: "Power system health check",    category: "Solar & Power" },
];

export const galleryCategories: GalleryCategory[] = [
  "CCTV & Security",
  "Solar & Power",
  "Electrical & Cabling",
  "On-Site Team",
];
