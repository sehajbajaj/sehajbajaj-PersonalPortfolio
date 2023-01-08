import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center align-bottom text-center min-h-6 px-auto mx-auto">
      <div className="mt-5">
        <Link href={"https://github.com/sehajbajaj"}>
          <a target="_blank">
            <button className="btn mx-2 btn-outline">
              <FaGithub size={25} />
            </button>
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/sehajbajaj/"}>
          <a target="_blank">
            <button className="btn mx-2 btn-outline">
              <FaLinkedin size={25} />
            </button>
          </a>
        </Link>
        <Link href={"/Resume_v5.pdf"}>
          <a target="_blank">
            <button className="btn mx-2 btn-outline">
              <FaPaperclip size={25} />
            </button>
          </a>
        </Link>
      </div>

      <div className="py-5 text-center ">
        Made with 💞 by{" "}
        <a href="https://github.com/sehajbajaj">
          <span className="font-medium underline">Sehajpreet Kaur</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
