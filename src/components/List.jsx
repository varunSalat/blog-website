import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { fallbackImg } from "../assets";

const List = ({ blogData }) => {
  const navigate = useNavigate();
  const { scrollToTop } = useContext(UserContext);
  const [imgErr, setImgErr] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(true);

  const { url, title, summary, cat, img } = blogData;

  return (
    <>
      <article className="flex flex-col gap-4 justify-start">
        {/* <div className="flex flex-row items-center justify-start gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-medium text-md">{name}</span>
          <span>•</span>
          <p className="font-medium text-sm text-gray-500">{author.name}</p>
        </div> */}
        <div className="lg:grid grid-cols-10 flex flex-col-reverse sm:gap-6 md:gap-8 items-start justify-start">
          <div className="col-span-7 flex flex-col gap-6">
            <div>
              <h1
                className="font-bold text-lg cursor-pointer md:text-2xl"
                onClick={() => {
                  navigate(`/a/${url}`);
                  scrollToTop();
                }}
              >
                {title}
              </h1>
            </div>
            <div>
              <p className="text-base font-light text-gray-500 text-justify ">
                {summary}
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-4">
              <button className="px-3 py-1 text-base rounded-md bg-gray-300">
                {cat}
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <img
              src={imgErr || isImgLoading ? fallbackImg : img}
              alt={"title.slice(0, 30)"}
              className="rounded-2xl object-center object-cover aspect-[3/2] border-2 border-black/10"
              onError={() => setImgErr(true)}
              onLoad={() => setIsImgLoading(false)}
            />
          </div>
        </div>
      </article>

      <div className="border-b-2 border-black/10" />
    </>
  );
};

List.propTypes = {
  blogData: PropTypes.object.isRequired,
};

export default List;
