import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="padding mt-4 border-primary bg-primary border-t-4 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row gap-4 items-center justify-center">
        <span className="border-[1px] rounded-full p-1 flex items-center justify-center">
          <Link to={"https://facebook.com"}>
            <InstagramIcon className="text-gray-200 transition-all duration-300 hover:text-white" />
          </Link>
        </span>
        <span className="border-[1px] rounded-full p-1 flex items-center justify-center">
          <Link to={"https://facebook.com"}>
            <TwitterIcon className="text-gray-200 transition-all duration-300 hover:text-white" />
          </Link>
        </span>
        <span className="border-[1px] rounded-full p-1 flex items-center justify-center">
          <Link to={"https://facebook.com"}>
            <LinkedInIcon className="text-gray-200 transition-all duration-300 hover:text-white" />
          </Link>
        </span>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Link
          to={"/term-condition"}
          className="text-gray-200 transition-all duration-300 hover:text-white"
        >
          Terms of Use
        </Link>
        <Link
          to={"/privacy-policy"}
          className="text-gray-200 transition-all duration-300 hover:text-white"
        >
          Privacy Policy
        </Link>
        <Link className="text-gray-200 transition-all duration-300 hover:text-white">
          Site Map
        </Link>
      </div>
      <span className="text-white">
        Copyright © 2023 - 2023 xyzcompany. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
