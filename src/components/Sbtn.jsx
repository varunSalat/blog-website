/* eslint-disable react/prop-types */

import qs from "query-string";
import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Sbtn = ({ title }) => {
  const [searchParams] = useSearchParams();
  const router = useNavigate();

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
      onClick={handleClick}
      className="px-6 py-2 bg-gray-100 text-md font-semibold rounded-full cursor-pointer"
    >
      <span>{title}</span>
    </div>
  );
};

export default Sbtn;
