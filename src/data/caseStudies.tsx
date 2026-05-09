import type { IconType } from "react-icons";
import { FaBookOpen, FaQrcode, FaRegFolderOpen } from "react-icons/fa";
import { GiCat, GiPhotoCamera, GiReceiveMoney } from "react-icons/gi";

export type CaseStudy = {
  key: string;
  badge: "commercial" | "own";
  icon: IconType;
  stack: "budgetapp" | "catfacts" | "lurniflow" | "bms" | "pythonService";
  href?: string;
  rank?: number; // For commercial projects, higher rank means higher priority in display
};

export const caseStudies: CaseStudy[] = [
  {
    key: "budgetapp",
    href: "https://github.com/S0ffen/Financial-app",
    badge: "own",
    icon: GiReceiveMoney,
    stack: "budgetapp",
  },
  {
    key: "catfacts",
    href: "https://catnfacts.vercel.app/",
    badge: "own",
    icon: GiCat,
    stack: "catfacts",
  },
  {
    key: "lurniflow",
    href: "https://lurniflow.com/",
    badge: "own",
    icon: FaBookOpen,
    stack: "lurniflow",
    rank: 2,
  },
  {
    key: "bms",
    badge: "commercial",
    icon: FaRegFolderOpen,
    stack: "bms",
    rank: 2,
  },
  {
    key: "qrReader",
    badge: "commercial",
    icon: FaQrcode,
    stack: "pythonService",
    rank: 1,
  },
  {
    key: "photoExif",
    badge: "commercial",
    icon: GiPhotoCamera,
    stack: "pythonService",
    rank: 1,
  },
];
