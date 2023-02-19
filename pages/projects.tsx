import Link from "next/link";
import ProjectsImg from "@/public/projects.svg";

const Projects: React.FC = () => {
  const projects = [
    {
      key: 1,
      name: "Coin tracker app",
      href: "https://github.com/akrzelj-ossunist/gecko-coin-app",
      madeIn: ["NextJS", "TailwindCSS", "Typescript", "Eslint"],
      description:
        "Listing,sorting and filtering coins we got from api using react query, lazy loading, debounce hook, react chartjs 2 and more.",
    },
    {
      key: 2,
      name: "Rick and morty api app",
      href: "https://github.com/akrzelj-ossunist/rick-morty-web",
      madeIn: ["NextJS", "TailwindCSS", "Typescript", "Eslint"],
      description:
        "App about rick and morty lore where we get api data and from that data we sort, filter, list all the characters, locations, ect.",
    },
    {
      key: 3,
      name: "Portfolio",
      href: "https://github.com/akrzelj-ossunist/portfolio",
      madeIn: ["ReactJs", "CSS"],
      description:
        "This is a portfolio application built by using React.js. This is my first portfolio app and wasnt maintained for some time.",
    },
    {
      key: 4,
      name: "Personal web",
      href: "https://github.com/akrzelj-ossunist/personal-web",
      madeIn: ["NextJS", "TailwindCSS", "Typescript", "Eslint"],
      description:
        "This is a portfolio application built by using Next.js, TailwindCSS, Typescript and libraries like formik, yup, emailjs.",
    },
    {
      key: 4,
      name: "Vanilla JS projects",
      href: "https://github.com/akrzelj-ossunist/VanillaJsProjects",
      madeIn: ["HTML", "CSS", "JavaScript"],
      description: "Simple vanilla JS projects made in HTML, CSS and JS.",
    },
    {
      key: 5,
      name: "Quiz app",
      href: "https://github.com/akrzelj-ossunist/quiz-app",
      madeIn: ["NextJS", "TailwindCSS", "Typescript", "Eslint"],
      description:
        "Simple quiz game where on home screen you can adjust settings of the game and then start playing.",
    },
  ];
  return (
    <div className="bg-slate-50">
      <div className="flex justify-center">
        <div className="w-[940px] mt-10 flex items-center ml-10">
          <ProjectsImg className="w-12 h-12 mr-2 phone:w-8 phone:h-8" />
          <p className="font-bold text-5xl phone:text-3xl">Projects</p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap w-[940px] justify-center mt-4 mb-10 phone:w-full">
          {projects.map((project) => {
            return (
              <Link
                target="_blank"
                href={project.href}
                key={project.key}
                className="flex flex-col justify-between w-[420px] p-3 border-[1px] border-gray-200 m-6 rounded-lg hover:-translate-y-2 hover:shadow-md ease-in-out duration-500 bg-white"
              >
                <p className="text-xl font-semibold text-blue-700">
                  {project.name}
                </p>
                <div className="flex">
                  {project.madeIn.map((lang) => {
                    return (
                      <p
                        className="text-xs text-gray-700 bg-blue-100 py-[2px] rounded-md mr-1 px-2 my-3 h-[20px]"
                        key={lang}
                      >
                        {lang}
                      </p>
                    );
                  })}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {project.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
