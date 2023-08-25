import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Btn from "./Btn";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";
import Sbtn from "./Sbtn";
import { useCallback, useState } from "react";
import qs from "query-string";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSearch = useCallback(() => {
    let q = {};

    if (searchParams) {
      q = qs.parse(searchParams.toString());
    }

    const updatedQuery = {
      ...q,
      s: search,
    };

    if (searchParams?.get("s")) {
      delete updatedQuery.s;
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router(url);
  }, [router, search, searchParams]);

  return (
    <header className="w-full bg-white border-b-[1px] border-black/10 padding max-h-18">
      <nav className="flex flex-row items-center justify-between gap-2 w-full">
        <div className="max-h-12 flex-3">
          <Link to={"#"}>
            <img src="./logo.png" alt="Logo" className="object-cover h-12" />
          </Link>
        </div>
        <div className="flex-2 relative hidden md:block">
          <SearchIcon
            className="absolute top-[10px] right-[10px] text-black/20"
            onClick={handleSearch}
          />
          <input
            type="text"
            className="px-8 py-2 border-black/10 border-2 rounded-full w-96 focus:outline-none font-medium"
            placeholder="Search you're favourite article!"
            onChange={(v) => setSearch(v.target.value)}
            value={search}
          />
        </div>
        <div className="flex-2 hidden 2xl:flex px-4 flex-row items-center justify-start gap-2">
          <span className="font-normal">Topics: </span>
          <Sbtn title={"Science"} />
          <Sbtn title={"News"} />
          <Sbtn title={"Tech"} />
          <Sbtn title={"Investments"} />
          <Sbtn title={"Politics"} />
          <Sbtn title={"Others"} />
        </div>
        <div className="flex-3">
          <Btn title={"Write"} icon={BorderColorIcon} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
