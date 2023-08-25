import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="padding mt-4 border-black/20 border-t-[1px] flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row gap-4 items-center justify-center">
        <span className="border-[1px] rounded-full p-1 flex items-center justify-center">
          <Link to={"https://facebook.com"}>
            <FacebookRoundedIcon className="text-gray-700" />
          </Link>
        </span>
        <span className="border-[1px] rounded-full p-1 flex items-center justify-center">
          <Link to={"https://facebook.com"}>
            <InstagramIcon className="text-gray-700" />
          </Link>
        </span>
        <span className="border-[1px] rounded-full p-1 flex items-center justify-center">
          <Link to={"https://facebook.com"}>
            <TwitterIcon className="text-gray-700" />
          </Link>
        </span>
        <span className="border-[1px] rounded-full p-1 flex items-center justify-center">
          <Link to={"https://facebook.com"}>
            <LinkedInIcon className="text-gray-700" />
          </Link>
        </span>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Link>Terms of Use</Link>
        <Link>Privacy Policy</Link>
        <Link>Site Map</Link>
      </div>
      <span>Copyright © 2023 - 2023 xyzcompany. All rights reserved</span>
    </footer>
  );
};

export default Footer;
