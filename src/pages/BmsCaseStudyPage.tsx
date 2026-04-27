import {
  SiBlazor,
  SiDotnet,
  SiMqtt,
  SiPostgresql,
} from "react-icons/si";
import CaseStudyPageLayout from "../components/CaseStudyPageLayout";

const BmsCaseStudyPage: React.FC = () => {
  const stack = (
    <>
      <SiDotnet className="text-[#7C3AED]" title=".NET" />
      <SiPostgresql className="text-[#336791]" title="PostgreSQL" />
      <span className="text-pink-400 text-xs font-semibold">C#</span>
      <SiBlazor className="text-[#A020F0]" title="Blazor" />
      <SiMqtt className="text-[#FF7A00]" title="MQTT" />
      <span className="text-pink-400 text-xs font-semibold">BMS</span>
    </>
  );

  return <CaseStudyPageLayout badge="commercial" itemKey="bms" stack={stack} />;
};

export default BmsCaseStudyPage;
