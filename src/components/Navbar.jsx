import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Sbtn from "./Sbtn";
import { useCallback, useEffect, useState } from "react";
import qs from "query-string";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "../assets";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const router = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSearch = useCallback(
    (e) => {
      setNavOpen(false);
      e.preventDefault();
      let q = {};

      if (searchParams) {
        q = qs.parse(searchParams.toString());
      }

      const updatedQuery = {
        ...q,
        s: search,
      };

      if (searchParams?.get("s") == "") {
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
    },
    [router, search, searchParams]
  );

  useEffect(() => {
    navOpen
      ? (document.querySelector("body").style.overflowY = "hidden")
      : (document.querySelector("body").style.overflowY = "scroll");
  }, [navOpen]);

  const handleNavOpen = () => {
    window.history.pushState(
      {
        id: 1,
      },
      null,
      null
    );
    setNavOpen(true);
  };
  window.addEventListener("popstate", () => {
    setNavOpen(false);
    document.querySelector("body").style.overflowY = "scroll";
  });

  return (
    <header className="w-full border-b-[1px] border-black/10 padding max-h-18 bg-primary">
      <nav className="flex flex-row items-center justify-between gap-2 w-full">
        <div className="max-h-12 flex-3">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="object-cover h-6 md:h-9" />
          </Link>
        </div>
        <button className="xl:hidden" onClick={() => handleNavOpen()}>
          <MenuIcon style={{ fontSize: "2rem" }} />
        </button>
        <div className="flex-2 relative hidden xl:block w-[min(700px,100%)]">
          <SearchIcon
            className="absolute top-[10px] right-[10px] text-black/20"
            onClick={handleSearch}
          />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="px-8 py-2 border-black/10 border-2 rounded-full w-[100%] focus:outline-none font-medium"
              placeholder="Search you're favourite article!"
              onChange={(v) => setSearch(v.target.value)}
              value={search}
            />
          </form>
        </div>
        <div className="flex-2 hidden 2xl:flex px-4 flex-row items-center justify-start gap-2">
          <Sbtn title={"Finance"} />
          <Sbtn title={"Education"} />
          <Sbtn title={"Tech"} />
          <Sbtn title={"Others"} />
        </div>

        {navOpen && (
          <div className="fixed bg-primary xl:hidden top-0 left-0 w-screen min-h-[200vh]">
            <div className="flex w-screen items-center justify-end px-4 h-[80px]">
              <button onClick={() => setNavOpen(false)}>
                <CloseIcon style={{ fontSize: "2rem" }} />
              </button>
            </div>
            <h1 className="text-center text-2xl mt-[5%]">Hot Topics</h1>
            <div className="flex flex-wrap gap-6 justify-center mt-2 w-screen p-6">
              <Sbtn title={"Science"} setNavOpen={setNavOpen} />
              <Sbtn title={"Education"} setNavOpen={setNavOpen} />
              <Sbtn title={"Tech"} setNavOpen={setNavOpen} />
              <Sbtn title={"Others"} setNavOpen={setNavOpen} />
            </div>

            <div className="flex-2 relative w-[90%] ml-[5%] mt-4">
              <SearchIcon
                className="absolute top-[10px] right-[10px] text-black/20"
                onClick={handleSearch}
                style={{ fontSize: "1.5rem" }}
              />
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  className="px-8 py-2 border-black/10 border-2 rounded-full w-[100%] focus:outline-none font-medium"
                  placeholder="Search you're favourite article!"
                  onChange={(v) => setSearch(v.target.value)}
                  value={search}
                />
              </form>
              <button
                type="submit"
                className="bg-black text-white mt-4 px-6 py-2 w-[90%] text-base rounded-3xl ml-[5%]"
                onClick={(e) => handleSearch(e)}
              >
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
