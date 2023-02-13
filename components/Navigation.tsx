import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ContactMeForm from "./ContactMeForm";
import Modal from "./Modal";
import SideNav from "./SideNav";
import Menu from "@/public/menu-2.svg";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import Close from "@/public/close.svg";
import Links from "./Links";

const Navigation: React.FC = () => {
  const router = useRouter();
  const [dropNav, setDropNav] = useState(false);
  const [showContacMe, setShowContactMe] = useState(false);
  useEffect(() => {
    document.addEventListener("click", clickOutside);
  }, []);
  const ref = useRef<HTMLDivElement | null>(null);
  const clickOutside = (el: any) => {
    if (ref.current?.contains(el.target)) {
      setShowContactMe(false);
      setDropNav(false);
    }
  };

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ];
  return (
    <>
      <div ref={ref}>
        <Modal className={`${showContacMe || dropNav ? "" : "hidden"}`} />
      </div>
      <SideNav
        className={`${
          showContacMe ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500`}
      >
        <ContactMeForm setShowContactMe={setShowContactMe} />
      </SideNav>
      <div className="sticky flex w-full items-center border-[1px] border-b-gray-200 top-0 left-0 justify-evenly z-30 phone:z-40 tablet:z-40 bg-white tablet:justify-between phone:justify-between">
        <p className="font-semibold text-2xl ml-4">Welcome</p>
        {dropNav ? (
          <Close
            className="desktop:hidden m-4"
            onClick={() => setDropNav(false)}
          />
        ) : (
          <Menu
            className="desktop:hidden m-4"
            onClick={() => setDropNav(true)}
          />
        )}

        <div className="font-semibold text-xl flex items-center phone:hidden tablet:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-4 ${
                router.pathname === link.href
                  ? "border-b-[1px] border-gray-500"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <p
            className="px-4 py-4 cursor-pointer"
            onClick={() => {
              setShowContactMe(true);
            }}
          >
            Contact me
          </p>
        </div>
      </div>
      <div
        className={`${
          dropNav ? "translate-y-0" : "-translate-y-full"
        } ease-in-out duration-500 desktop:hidden bg-white fixed z-30 w-full h-[350px] px-8 flex flex-col justify-evenly shadow-md rounded-b-xl`}
      >
        <div className="flex pb-3 border-b-[1px] border-gray-200 mt-6">
          <Image
            src={profile}
            alt="profile"
            className="w-12 h-12 mr-3 rounded-full"
          />
          <div>
            <p className="font-medium text-lg">Antonio Krželj</p>
            <p className="text-sm text-gray-400">
              krzelj99antonio.ak@gmail.com
            </p>
          </div>
        </div>
        <div className="h-full flex flex-col justify-evenly font-semibold text-xl border-b-[1px] border-gray-200">
          <Link href="/" onClick={() => setDropNav(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setDropNav(false)}>
            About
          </Link>
          <Link href="/projects" onClick={() => setDropNav(false)}>
            Projects
          </Link>
          <p
            onClick={() => {
              setDropNav(false);
              setShowContactMe(true);
            }}
          >
            Contact me
          </p>
        </div>
        <div className="w-full flex justify-center items-center h-24">
          <Links />
        </div>
      </div>
    </>
  );
};

export default Navigation;
