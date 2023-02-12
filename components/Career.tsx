import locastic from "@/public/locastic.png";
import Image from "next/image";
import Job from "@/public/job.svg";

const Career: React.FC = () => {
  const career = [
    {
      key: 1,
      image: locastic,
      job: "Intern front-end web developer",
      firm: "Locastic d.o.o.",
      date: "01.2023 - 02.2023",
      languages: ["React.js", "Next.js", "Typescript", "Tailwind CSS"],
      description:
        "Learning and creating websites from scratch using Nextjs framework with typescript and style with tailwind CSS.From libraries I was using formik, yup, react-query, react-table, react-chartjs-2 and other.",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-3">
        <Job className="w-[50px] h-[50px]" />
        <p className="text-3xl font-bold ml-2 border-b-[1px] pb-2 px-1 border-gray-300">
          Career
        </p>
      </div>
      <div className="">
        {career.map((job) => {
          return (
            <div
              key={job.key}
              className="border-[1px] relative border-gray-200 p-2 rounded-lg flex items-center hover:-translate-y-2 hover:shadow-lg ease-in-out duration-500 bg-white phone:shadow-lg"
            >
              <Image
                src={job.image}
                alt="job"
                className="w-[150px] h-[150px] mr-5 rounded-lg phone:absolute phone:bottom-2 phone:right-0 phone:w-[52px] phone:h-[52px]"
              />
              <div className="flex flex-col">
                <p className="font-bold text-2xl">{job.job}</p>
                <p className="font-semibold text-xl my-2">{job.firm}</p>
                <div className="flex flex-wrap">
                  {job.languages.map((language) => {
                    return (
                      <p
                        className="text-xs text-gray-700 bg-blue-100 py-[2px] rounded-md mr-1 px-2 my-1 h-[20px]"
                        key={language}
                      >
                        {language}
                      </p>
                    );
                  })}
                </div>
                <p className="mt-2">{job.description}</p>
                <p className="desktop:absolute top-4 right-4 text-sm text-gray-500 font-semibold phone:my-3">
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

export default Career;
