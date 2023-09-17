import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useCallback, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
import PropTypes from "prop-types";
import { UserContext } from "../context/UserContext";

const Pagination = ({ totalBlogs }) => {
  const router = useNavigate();
  const [searchParams] = useSearchParams();
  const { scrollToTop } = useContext(UserContext);

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const totalPage = Math.ceil(totalBlogs / 10);
  const onBack = useCallback(() => {
    let q = {};
    if (searchParams) {
      q = qs.parse(searchParams.toString());
    }
    if (!(searchParams?.get("page") > 1)) {
      return null;
    }
    const p = searchParams.get("page");
    const updatedQuery = {
      ...q,
      page: p - 1,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router(url);
    scrollToTop();
  }, [searchParams, router]);

  const onNext = useCallback(() => {
    let q = {};
    if (searchParams) {
      q = qs.parse(searchParams.toString());
    }
    let p = 1;
    if (searchParams?.get("page")) {
      p = parseInt(searchParams.get("page"));
    }
    const updatedQuery = {
      ...q,
      page: p + 1,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router(url);
    scrollToTop();
  }, [searchParams, router]);

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <button disabled={currentPage === 1}>
        <ArrowBackIcon
          fontSize="large"
          className={`p-2 rounded-md ${
            currentPage === 1 ? "bg-gray-200" : "bg-gray-400"
          }`}
          onClick={onBack}
        />
      </button>
      <span className="text-lg text-gray-500 font-bold">
        {currentPage === 0 ? "1" : currentPage}
      </span>
      <button
        disabled={totalBlogs !== 0 ? currentPage - totalPage === 0 : true}
      >
        <ArrowForwardIcon
          fontSize="large"
          className={`p-2 rounded-md ${
            totalBlogs !== 0
              ? currentPage - totalPage === 0
                ? "bg-gray-200"
                : "bg-gray-400"
              : "bg-gray-200"
          }`}
          onClick={onNext}
          disabled
        />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalBlogs: PropTypes.number,
};

export default Pagination;
