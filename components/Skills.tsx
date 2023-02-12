import Software from "@/public/software.svg";
import Personal from "@/public/personal.svg";
import Language from "@/public/language.svg";
import SkillsImg from "@/public/skills.svg";

const Skills: React.FC = () => {
  const skills = {
    software: [
      "Javascript",
      "HTML/CSS",
      "ReactJS",
      "NextJS",
      "Tailwind-CSS",
      "Typescript",
      "Databases",
      "NodeJS",
      "Python",
    ],
    language: ["English", "Croatian"],
    personal: [
      "Good under pressure",
      "Team player",
      "Presistent",
      "Always trying to be better",
    ],
  };
  return (
    <>
      <div className="flex items-center mb-3 mt-10">
        <SkillsImg className="w-[45px] h-[45px]" />
        <p className="text-3xl font-bold ml-2 border-b-[1px] pb-1 px-1 border-gray-300">
          Skills
        </p>
      </div>
      <div className="flex flex-wrap justify-center mb-10">
        <div className="border-[1px] border-gray-200 rounded-lg hover:-translate-y-2 hover:shadow-lg ease-in-out duration-500 p-4 w-[250px] mx-7 my-2 bg-white phone:shadow-lg">
          <div className="flex items-center mb-5">
            <Software className="w-[25px] h-[25px] mr-2" />
            <p className="text-xl font-semibold text-blue-500">
              Software skills
            </p>
          </div>
          {skills.software.map((skill) => {
            return (
              <p className="py-2" key={skill}>
                -{skill}
              </p>
            );
          })}
        </div>
        <div className="border-[1px] border-gray-200 rounded-lg hover:-translate-y-2 hover:shadow-lg ease-in-out duration-500 p-4 w-[250px] mx-7 my-2 bg-white phone:shadow-lg">
          <div className="flex items-center mb-5">
            <Personal className="text-gray-400 w-[25px] h-[25px] mr-2" />
            <p className="text-xl font-semibold text-blue-500">
              Personal skills
            </p>
          </div>
          {skills.personal.map((skill) => {
            return (
              <p className="py-2" key={skill}>
                -{skill}
              </p>
            );
          })}
        </div>
        <div className="border-[1px] border-gray-200 rounded-lg hover:-translate-y-2 hover:shadow-lg ease-in-out duration-500 p-4 w-[250px] mx-7 my-2 bg-white phone:shadow-lg">
          <div className="flex items-center mb-5">
            <Language className="text-gray-400 w-[25px] h-[25px] mr-2" />
            <p className="text-xl font-semibold text-blue-500">
              Language skills
            </p>
          </div>
          {skills.language.map((skill) => {
            return (
              <p className="py-2" key={skill}>
                -{skill}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
