import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fallbackImg } from "../assets";

const SideBlog = ({ blogData }) => {
  const router = useNavigate();
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [isImgErr, setImgErr] = useState(false);

  const { title, img, url } = blogData;
  return (
    <div
      className="flex flex-col gap-2 pb-6 border-b-[2px] border-black/10  w-full my-2 cursor-pointer"
      onClick={() => router(`/a/${url}`)}
    >
      <figure>
        <img
          src={isImgErr || isImgLoading ? fallbackImg : img}
          alt={title.slice(0, 10)}
          className="rounded-xl object-contain"
          onLoad={() => setIsImgLoading(false)}
          onError={() => setImgErr(true)}
        />
      </figure>
      <h1 className="text-lg font-semibold">{title.slice(0, 60)}...</h1>
    </div>
  );
};
SideBlog.propTypes = {
  blogData: PropTypes.object.isRequired,
};

export default SideBlog;
