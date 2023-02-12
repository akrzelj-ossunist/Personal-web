import Github from "@/public/github.svg";
import LinkedIn from "@/public/linkedin.svg";
import Phone from "@/public/phone.svg";
import Link from "next/link";

const Links: React.FC = () => {
  return (
    <>
      <Link href="https://github.com/akrzelj-ossunist" target="_blank">
        <Github className="text-black w-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/antonio-krzelj-825118231/"
        target="_blank"
      >
        <LinkedIn className="text-blue-700 w-6 mx-4" />
      </Link>
      <Link href="tel:+385958769555">
        <Phone className="text-black w-6" />
      </Link>
    </>
  );
};

export default Links;
