import { Btn, MostViewedCard } from "../components";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { UserContext } from "../context/UserContext";
import Loader from "../layouts/Loader";
import DeleteIcon from "@mui/icons-material/Delete";

const Article = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { blogUrl } = useParams();
  const [data, setData] = useState(null); // Initialize data as a state variable
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  // const fetchNewData = () => {
  //   return axios(`http://localhost:8800/api/blog/${blogUrl}`);
  // };

  // const res = useQuery(["blog-detail", blogUrl], fetchNewData, {
  //   cacheTime: 1000 * 6000,
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/blog/${blogUrl}`
        );
        setData(response.data); // Set the data state with the fetched data
        setIsLoading(false); // Set loading state to false when data is available
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };
    fetchData();
  }, [blogUrl]);

  // delete blog

  const handleDeleteBlog = async (blogId) => {
    await axios
      .delete(`http://localhost:8800/api/blog/${blogId}`, {
        withCredentials: true,
      })
      .then(() => {
        return navigate("/");
      });
  };

  // Time Func
  const formatedTime = (timestamp) => {
    const options = { year: "2-digit", month: "long", day: "numeric" };
    const formattedDate = new Date(timestamp).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const handleLikeBlog = async (blogId) => {
    const res = await axios.post(`http://localhost:8800/api/like/${blogId}`);
    console.log(res);
  };

  const handleDislikeBlog = async (blogId) => {
    const res = await axios.post(`http://localhost:8800/api/dislike/${blogId}`);
    console.log(res);
  };

  if (isLoading) {
    return <Loader />;
  }
  const { title, img, summary, blog, createdAt, dislike, like, url } =
    data.blog;
  return (
    <>
      <div className="grid md:grid-cols-12">
        <div className="col-span-2"></div>
        <section className="flex flex-col justify-center items-center gap-4 padding md:col-span-8">
          <div className="flex flex-col justify-center items-center">
            <img
              src={data.img}
              alt="Profile Pic"
              className="h-20 w-20 rounded-full object-cover"
            />
            <h4 className="font-semibold text-base">{data.name}</h4>
            <time className="font-light text-sm text-gray-400">
              {formatedTime(createdAt)}
            </time>
          </div>
          {user && (
            <div className="flex gap-4">
              <Btn
                title={"Edit"}
                icon={BorderColorIcon}
                onClick={() => navigate(`/e/${url}`)}
              />
              <button
                onClick={() => handleDeleteBlog(data.blog._id)}
                className="px-6 py-2 text-md font-semibold border-black/10 border-2 rounded-xl flex flex-row items-center justify-center transition-all duration-300 hover:bg-red-400 hover:text-white"
              >
                <DeleteIcon /> Delete
              </button>
            </div>
          )}
          <h1 className="text-2xl text-justify md:text-3xl font-bold">
            {title}
          </h1>
          <h3 className="text-lg font-semibold text-gray-500">{summary}</h3>
          <img
            src={img}
            alt=""
            className="object-cover rounded-xl border-black/20 border-2"
          />
          <article className="text-lg text-gray-400 font-medium flex flex-col gap-4">
            {parse(blog)}
          </article>
          <div className="border-t-2 w-full border-black/20">
            <div className="flex justify-center items-center gap-4 mt-6">
              <p className="text-xl text-gray-500">Was it helpful?</p>
              <div className="flex gap-2">
                <button onClick={() => handleLikeBlog(data.blog._id)}>
                  <ThumbUpOffAltIcon style={{ fontSize: "2rem" }} />
                  <p>{like}</p>
                </button>
                <button onClick={() => handleDislikeBlog(data.blog._id)}>
                  <ThumbDownOffAltIcon style={{ fontSize: "2rem" }} />
                  <p>{dislike}</p>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="col-span-2"></div>
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

export default Article;
