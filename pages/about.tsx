import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Career from "@/components/Career";

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 flex w-full justify-center">
      <div className="flex flex-col w-[940px] mt-16 phone:mt-10 mx-5">
        <Career />
        <Education />
        <Skills />
      </div>
    </div>
  );
};
export default About;
