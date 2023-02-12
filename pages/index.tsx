import TechStack from "@/components/TechStack";
import profile from "@/public/profile.jpg";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center w-full py-16 phone:pt-4 bg-slate-50">
      <div className="flex flex-col w-[940px] phone:w-full">
        <div className="flex items-center border-b-[1px] border-gray-200 p-8 rounded-xl shadow-sm phone:flex-col bg-white">
          <Image
            src={profile}
            alt="profile"
            className="w-40 h-40 rounded-full"
          />
          <p className="text-2xl font-semibold ml-5 phone:ml-0 phone:text-xl phone:mt-4">
            Hello, my name is Antonio Krželj, motivated programmer with solid
            knowledge in programming while always striving to get better and
            learn more.
          </p>
        </div>
        <TechStack />
      </div>
    </div>
  );
};
export default Home;
