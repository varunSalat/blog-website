import axios from "axios";
import { List, Pagination, SideBlog, MostViewedCard } from "../components";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import NoBlogFound from "../layouts/NoBlogFound";
import { useQuery } from "react-query";

const Listing = () => {
  // HOOKS
  const [searchParams] = useSearchParams();
  const router = useNavigate();
  // FUNCTIONS
  const fetchFunc = async () => {
    const query = {};
    const page = searchParams?.get("page");
    const s = searchParams?.get("s");
    const cat = searchParams?.get("cat");

    if (page !== null) {
      query.page = page;
    } else {
      query.page = 1;
    }
    if (s !== null) {
      query.s = s;
    } else {
      delete query.s;
    }
    if (cat !== null) {
      query.cat = cat;
    } else {
      delete query.cat;
    }
    const response = await axios.post("http://localhost:8800/api/blog", query);
    return response.data;
  };

  // FETCHING DATA
  const res = useQuery(["blog-list", searchParams.toString()], fetchFunc, {
    cacheTime: 1000 * 6000,
  });
  const totalBlogs = res?.data?.totalCount;
  const most = res?.data?.most;
  console.log(most);

  return (
    <>
      {res?.isLoading && <Loader />}
      <div className="grid xl:grid-cols-12">
        <div className="hidden md:flex md:col-span-2 flex-col gap-2 w-full padding"></div>
        <section className="padding flex flex-col gap-4 w-full col-span-8">
          <div>
            <span className="my-2 block text-2xl font-semibold">Articles </span>
            <div className="border-b-2 border-black/10" />
          </div>
          {res?.data?.data?.map((d) => (
            <List
              key={d._id}
              onClick={() => router(`/a/${d.url}`)}
              title={d.title}
              summary={d.summary}
              img={d.img}
              createdAt={d.createdAt}
              cat={d.cat.split(",")}
              name={d.author.name}
              profile={d.author.img}
            />
          ))}
          {res?.data?.data?.length === 0 && <NoBlogFound />}
          <div className="flex justify-end">
            <Pagination totalBlogs={totalBlogs} />
          </div>
        </section>
        <div className="hidden xl:flex md:col-span-2 flex-col gap-2 w-full padding">
          <div>
            <span className="my-2 block text-2xl font-semibold">
              Most Viewed
            </span>
            <div className="border-b-2 border-black/10" />
          </div>
          <SideBlog />
          <div className="border-b-2 border-black/10" />
          <SideBlog />
          <div className="border-b-2 border-black/10" />
          <SideBlog />
        </div>
      </div>

      <div className="xl:grid block md:grid-cols-12">
        <div className="hidden md:flex md:col-span-2 flex-col gap-2 w-full padding"></div>
        <section className="padding flex flex-col gap-4 w-full col-span-8">
          <div>
            <span className="my-2 block text-2xl font-semibold">
              Most Viewed
            </span>
            <div className="border-b-2 border-black/10" />
          </div>
          <div className="flex gap-8 mt-6 justify-center flex-wrap">
            <MostViewedCard />
            <MostViewedCard />
            <MostViewedCard />
            <MostViewedCard />
            <MostViewedCard />
            <MostViewedCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default Listing;
