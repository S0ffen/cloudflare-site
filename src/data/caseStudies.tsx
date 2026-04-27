import type { IconType } from "react-icons";
import { FaQrcode, FaRegBuilding, FaRegFolderOpen } from "react-icons/fa";
import { GiCat, GiPhotoCamera, GiReceiveMoney } from "react-icons/gi";

export type CaseStudy = {
  key: string;
  badge: "commercial" | "own";
  icon: IconType;
  stack: "budgetapp" | "catfacts" | "solarixo" | "bms" | "pythonService";
  href?: string;
  internalPath?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    key: "budgetapp",
    href: "https://budgeting-pi.vercel.app/demo",
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
    key: "solarixo",
    href: "https://solarixo-energy.vercel.app/",
    badge: "own",
    icon: FaRegBuilding,
    stack: "solarixo",
  },
  {
    key: "bms",
    badge: "commercial",
    icon: FaRegFolderOpen,
    stack: "bms",
    internalPath: "/case-studies/bms-platform",
  },
  {
    key: "qrReader",
    badge: "commercial",
    icon: FaQrcode,
    stack: "pythonService",
    internalPath: "/case-studies/qr-code-reader-service",
  },
  {
    key: "photoExif",
    badge: "commercial",
    icon: GiPhotoCamera,
    stack: "pythonService",
    internalPath: "/case-studies/photo-exif-reader-service",
  },
];

export const getCaseStudyByPath = (pathname: string) =>
  caseStudies.find((study) => study.internalPath === pathname);
