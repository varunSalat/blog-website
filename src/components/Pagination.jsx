import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const Pagination = () => {
  const router = useNavigate();
  const [searchParams] = useSearchParams();
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
  }, [searchParams, router]);

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <ArrowBackIcon
        fontSize="large"
        className="p-2 bg-gray-200 rounded-md cursor-pointer"
        onClick={onBack}
      />
      <span className="text-lg text-gray-500 font-bold">1</span>
      <ArrowForwardIcon
        fontSize="large"
        className="p-2 bg-gray-200 rounded-md cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
};

export default Pagination;
