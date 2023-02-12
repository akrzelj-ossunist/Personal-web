import Links from "./Links";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex w-full border-t-[1px] items-center border-gray-200 bottom-0 left-0 justify-center">
        <div className="flex w-[50%] justify-between items-center phone:w-full">
          <p className="py-5 font-medium text-gray-400 text-sm w-[50%] phone:ml-9">
            © 2023 Antonio Krželj
          </p>
          <div className="flex w-[50%] justify-end phone:hidden">
            <Links />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
