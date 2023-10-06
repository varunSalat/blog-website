import { Btn } from "../components";
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
import { listingAPI } from "../apis/axios/blogsAPIs";
import { useQuery } from "react-query";
import { fallbackImg } from "../assets";
import { apiWithAuth } from "../apis/axios/blogsAPIs";
import { errorToast, successToast } from "../constants/toastMsgs";
import toast from "react-hot-toast";

const fetchBlog = (blogUrl) => {
  return listingAPI(`/api/blog/${blogUrl}`);
};

const Article = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { blogUrl } = useParams();
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [isImgErr, setIsImgErr] = useState(false);

  const blogRes = useQuery(["blog-detail", blogUrl], () => fetchBlog(blogUrl));

  const { isLoading, data } = blogRes;
  useEffect(() => {
    document.title = `Scholarwithtech | blog website | ${data?.data.blog.cat}`;
    // changing meta description
    const description = data?.data?.blog?.title.slice(0, 155) || "";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = description;
  }, [data]);

  // delete blog

  const handleDeleteBlog = async (blogId) => {
    try {
      await apiWithAuth.delete(`/api/blog/${blogId}`);
      navigate("/");
      successToast("Blog is deleted successfully");
    } catch (error) {
      errorToast(error.message);
    }
  };

  const handleDeleteConfirmation = () => {
    const confirmed = window.confirm("Are you sure you want to delete this?");

    if (confirmed) {
      handleDeleteBlog(data?.data?.blog?._id);
    } else {
      toast("Your blog is not deleted", {
        icon: "😇",
      });
    }
  };

  const dataVar = data?.data?.blog;

  // *LOADING PAGE
  if (isLoading) {
    return <Loader />;
  }

  // *ARTICLE PAGE
  return (
    <>
      <div className="grid md:grid-cols-12">
        <div className="col-span-2"></div>
        <section className="flex flex-col justify-center items-center gap-4 padding md:col-span-8">
          {user && (
            <div className="flex gap-4">
              <Btn
                title={"Edit"}
                icon={BorderColorIcon}
                onClick={() => navigate(`/e/${data?.data?.blog?.url}`)}
              />
              <button
                onClick={handleDeleteConfirmation}
                className="px-6 py-2 text-md font-semibold border-black/10 border-2 rounded-xl flex flex-row items-center justify-center transition-all duration-300 hover:bg-red-400 hover:text-white"
              >
                <DeleteIcon /> Delete
              </button>
            </div>
          )}
          <h1 className="text-2xl text-justify md:text-3xl font-bold">
            {data?.data?.blog?.title}
          </h1>
          <h3 className="text-lg font-semibold text-gray-500">
            {data?.data?.blog?.summary}
          </h3>
          <img
            src={isImgErr || isImgLoading ? fallbackImg : data?.data?.blog?.img}
            loading="lazy"
            alt={data?.data?.blog?.title}
            className="object-cover min-h-[200px] w-full rounded-xl border-black/20 border-2"
            onError={() => setIsImgErr(true)}
            onLoad={() => setIsImgLoading(false)}
          />
          <article className="text-lg font-medium flex flex-col gap-4">
            {parse(data?.data?.blog?.blog)}
          </article>
        </section>
      </div>
    </>
  );
};

export default Article;
