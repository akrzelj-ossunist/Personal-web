const Modal: React.FC<{ children?: JSX.Element; className?: string }> = ({
  children,
  className: classValues,
}) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)] fixed z-40 tablet:z-20 phone:z-20 top-0 left-0 ${classValues}`}
    >
      {children}
    </div>
  );
};

export default Modal;
