const SideNav: React.FC<{ children: JSX.Element; className: string }> = ({
  children,
  className: classValues,
}) => {
  return (
    <div
      className={`w-[415px] phone:w-full rounded-l-2xl p-8 bg-white h-[100vh] fixed z-50 right-0 top-0 overflow-y-auto ${classValues}`}
    >
      {children}
    </div>
  );
};

export default SideNav;
