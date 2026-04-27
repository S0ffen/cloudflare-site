import { SiPython } from "react-icons/si";
import CaseStudyPageLayout from "../components/CaseStudyPageLayout";

const PhotoExifCaseStudyPage: React.FC = () => {
  const stack = (
    <>
      <SiPython className="text-[#3776AB]" title="Python" />
      <span className="text-pink-400 text-xs font-semibold">API</span>
      <span className="text-pink-400 text-xs font-semibold">Service</span>
      <span className="text-pink-400 text-xs font-semibold">Metadata</span>
    </>
  );

  return (
    <CaseStudyPageLayout badge="commercial" itemKey="photoExif" stack={stack} />
  );
};

export default PhotoExifCaseStudyPage;
