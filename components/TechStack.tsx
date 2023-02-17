import ReactQuery from "@/public/react-query.svg";
import ReactChartJS from "@/public/react-chart-js.svg";
import NextAuthtJS from "@/public/next-auth-js.svg";
import EmailJS from "@/public/email-js.svg";
import YupImg from "@/public/yup.svg";
import Formik from "@/public/formik.svg";
import TypescriptImg from "@/public/typescript-icon.svg";
import CSSImg from "@/public/css-icon.svg";
import JSImg from "@/public/javascript-icon.svg";
import ReactImg from "@/public/react-icon.svg";
import NextJsImg from "@/public/next-js-icon.svg";
import TailwindImg from "@/public/tailwind-css.svg";
import { useState } from "react";

const TechStack: React.FC = () => {
  const [filterTech, setFilterTech] = useState("All");
  const techStack = [
    {
      key: 1,
      image: <NextJsImg className="w-[42px] h-[42px]" />,
      name: "NextJS",
      type: "Web development",
    },
    {
      key: 2,
      image: <ReactImg className="w-[42px] h-[42px]" />,
      name: "ReactJS",
      type: "Web development",
    },
    {
      key: 3,
      image: <JSImg className="w-[42px] h-[42px]" />,
      name: "JavaScript",
      type: "Web development",
    },
    {
      key: 4,
      image: <TailwindImg className="w-[42px] h-[42px]" />,
      name: "TailwindCSS",
      type: "Web design",
    },
    {
      key: 5,
      image: <CSSImg className="w-[42px] h-[42px]" />,
      name: "CSS",
      type: "Web design",
    },
    {
      key: 6,
      image: <TypescriptImg className="w-[42px] h-[42px]" />,
      name: "Typescript",
      type: "Web development",
    },
    {
      key: 7,
      image: <Formik className="w-[42px] h-[42px]" />,
      name: "Formik",
      type: "Library",
    },
    {
      key: 8,
      image: <YupImg className="w-[42px] h-[42px]" />,
      name: "Yup",
      type: "Library",
    },
    {
      key: 9,
      image: <EmailJS className="w-[42px] h-[42px]" />,
      name: "EmailJs",
      type: "Library",
    },
    {
      key: 10,
      image: <NextAuthtJS className="w-[42px] h-[42px]" />,
      name: "AuthJs",
      type: "Library",
    },
    {
      key: 11,
      image: <ReactChartJS className="w-[42px] h-[42px]" />,
      name: "ChartJs 2",
      type: "Library",
    },
    {
      key: 12,
      image: <ReactQuery />,
      name: "React Query",
      type: "Library",
    },
  ];
  const filters = [
    { key: 1, label: "All" },
    { key: 2, label: "Web development" },
    { key: 3, label: "Web design" },
    { key: 4, label: "Library" },
  ];
  return (
    <div className="flex w-full flex-col items-center text-center mt-10">
      <p className="font-semibold text-4xl mb-4">Tech Stack</p>
      <p className="text-xl text-gray-500 w-auto phone:w-auto phone:m-1">
        A list of my favorite tools and libraries that I use on a regular basis.
      </p>
      <div className="font-medium text-lg flex w-[75%] justify-evenly my-5 flex-wrap phone:w-[95%] tablet:w-[95%]">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setFilterTech(filter.label)}
            className={`ease-in-out duration-500 px-4 py-1 rounded-xl border-[1px] border-gray-200 tablet:my-1 phone:my-1 hover:scale-110 hover:shadow-md ${
              filterTech === filter.label
                ? "bg-blue-300 text-white"
                : "bg-white text-gray-400"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap w-auto justify-center phone:w-full text-left">
        {techStack.map((stack) => {
          return filterTech === stack.type ? (
            <div
              key={stack.key}
              className="desktop:w-[300px] w-full h-[80px] p-4 bg-white m-2 rounded-lg flex items-center border-[1px] border-gray-200 hover:-translate-y-2 hover:shadow-md ease-in-out duration-500"
            >
              <div>{stack.image}</div>
              <div className="flex flex-col ml-5">
                <p className="text-blue-600 font-semibold">{stack.name}</p>
                <p className="text-gray-400 font-medium text-sm">
                  {stack.type}
                </p>
              </div>
            </div>
          ) : (
            filterTech === "All" && (
              <div
                key={stack.key}
                className="desktop:w-[300px] w-full h-[80px] p-4 bg-white m-2 rounded-lg flex items-center border-[1px] border-gray-200 hover:-translate-y-2 hover:shadow-md ease-in-out duration-500"
              >
                <div>{stack.image}</div>
                <div className="flex flex-col ml-5">
                  <p className="text-blue-600 font-semibold">{stack.name}</p>
                  <p className="text-gray-400 font-medium text-sm">
                    {stack.type}
                  </p>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
