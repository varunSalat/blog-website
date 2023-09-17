import qs from "query-string";
import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const Sbtn = ({ title, setNavOpen }) => {
  const [searchParams] = useSearchParams();
  const router = useNavigate();
  const category = searchParams.get("cat");

  const handleClick = useCallback(() => {
    let q = {};

    if (searchParams) {
      q = qs.parse(searchParams.toString());
    }

    const updatedQuery = {
      ...q,
      cat: title,
    };

    if (searchParams?.get("cat") === title) {
      delete updatedQuery.cat;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router(url);
  }, [title, searchParams, router]);

  return (
    <div
      onClick={() => {
        handleClick();
        setNavOpen(false);
      }}
      className={`px-6 py-2 ${
        title === category ? "bg-black text-white" : "bg-gray-100"
      } text-base text-md font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-black hover:text-white `}
    >
      <span>{title}</span>
    </div>
  );
};

Sbtn.propTypes = {
  title: PropTypes.string,
  setNavOpen: PropTypes.func,
};

export default Sbtn;
