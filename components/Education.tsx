import srednja from "@/public/srednja.jpeg";
import soss from "@/public/soss.png";
import Image from "next/image";
import EducationImg from "@/public/education.svg";

const Education: React.FC = () => {
  const education = [
    {
      key: 1,
      image: soss,
      field: "Bachelor of Science (B.S.) - Information technology",
      school: "University department of professional studies, Split",
      date: "09.2020 - Ongoing",
    },
    {
      key: 2,
      image: srednja,
      field: "Tehnician for vehicles",
      school: "Tehnical school Split",
      date: "09.2013 - 05.2017",
    },
  ];
  return (
    <div className="flex flex-col mt-16">
      <div className="flex items-center mb-3">
        <EducationImg className="w-[50px] h-[50px]" />
        <p className="text-3xl font-bold ml-2 border-b-[1px] pb-2 px-1 border-gray-300">
          Education
        </p>
      </div>
      <div className="">
        {education.map((job) => {
          return (
            <div
              key={job.key}
              className="border-[1px] relative border-gray-200 p-2 phone:p-5 rounded-lg flex items-center mb-4 hover:-translate-y-2 hover:shadow-lg ease-in-out duration-500 bg-white phone:shadow-md">
              <Image
                src={job.image}
                alt="job"
                className="w-[150px] h-[150px] mr-5 rounded-lg phone:absolute phone:bottom-2 phone:right-0 phone:w-[52px] phone:h-[52px]"
              />
              <div className="flex flex-col">
                <p className="font-bold text-2xl phone:text-md">{job.field}</p>
                <p className="font-semibold text-xl my-2 phone:text-base">
                  {job.school}
                </p>
                <p className="desktop:absolute top-4 right-4 text-sm text-gray-500 font-semibold">
                  {job.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
