import { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Btn } from "../components";
import JoditEditor from "jodit-react";
import { UserContext } from "../context/UserContext";
import { apiWithAuth } from "../apis/axios/blogsAPIs";
import { errorToast, successToast } from "../constants/toastMsgs";
const Example = ({ onBlur, value }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={{ style: { height: "500px" } }}
      tabIndex={1}
      onBlur={onBlur}
    />
  );
};

const Update = () => {
  const { login, user } = useContext(UserContext);

  const [blog, setBlog] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    img: "",
    cat: "",
    url: "",
    mostViewed: false,
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [isPosting, setIsPosting] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.name === "title") {
      const title =
        e.target.value.replace(/ /g, "-") + "-" + new Date().getSeconds();
      const lowerTitle = title.toLowerCase();
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        url: lowerTitle,
      });
    } else if (e.target.name === "mostViewed") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    try {
      setIsPosting(true);
      await apiWithAuth.post("api/create", { ...formData, blog }).then(() => {
        setFormData({
          ...formData,
          title: "",
          summary: "",
          img: "",
          cat: "",
          mostViewed: false,
          url: "",
        }),
          setBlog("");
      });
      setIsPosting(false);
      successToast("Blog posted successfully");
    } catch (error) {
      errorToast(error.message);
      setIsPosting(false);
    }
  };

  const handleLogin = async () => {
    await login(loginData);
  };

  if (user === null) {
    return (
      <section className="padding flex flex-col justify-center gap-4 items-center w-screen h-[70vh]">
        <h1 className="text-lg font-medium text-black">
          Please Login to Continue
        </h1>
        <div className="flex flex-col items-start">
          <label htmlFor="" className="text-lg font-medium text-gray-500">
            Email:
          </label>
          <input
            type="username"
            className="border-black/20 border-2 rounded-md p-2 w-80"
            name={"username"}
            onChange={(e) =>
              setLoginData({ ...loginData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="" className="text-lg font-medium text-gray-500">
            Password:
          </label>
          <input
            type="text"
            className="border-black/20 border-2 rounded-md p-2 w-80"
            name="password"
            onChange={(e) =>
              setLoginData({ ...loginData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col items-start">
          <Btn title={"Login"} onClick={handleLogin} />
        </div>
      </section>
    );
  }
  return (
    <section className="padding flex flex-col items-center justify-center gap-4 ">
      <div className="w-full xl:w-[1280px]">
        <h1 className="text-center text-2xl font-bold p-4 uppercase">
          Creating Article
        </h1>
      </div>
      <div className="w-full xl:w-[1280px]">
        <input
          type="text"
          className="border-black/20 border-2 rounded-md p-2 w-full"
          placeholder="Title of Article"
          name="title"
          value={formData.title}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="w-full xl:w-[1280px]">
        <input
          type="text"
          className="border-black/20 border-2 rounded-md p-2 w-full"
          placeholder="Summary of Article"
          name="summary"
          value={formData.summary}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="w-full xl:w-[1280px]">
        <input
          type="text"
          className="border-black/20 border-2 rounded-md p-2 w-full"
          placeholder="Image Url"
          name="img"
          value={formData.img}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="w-full xl:w-[1280px]">
        <select
          name="cat"
          value={formData.cat}
          onChange={(e) => handleInputChange(e)}
          className="border-black/20 border-2 rounded-md p-2 w-full"
        >
          <option value="" disabled>
            Select your category
          </option>
          <option value="Finance">Finance</option>
          <option value="Education">Education</option>
          <option value="Tech">Tech</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="w-[100%] flex xl:w-[1280px] my-6">
        <label htmlFor="mostViewed" className="w-[200px]">
          Add to Most Viewed
        </label>
        <input
          type="checkbox"
          className="border-black/20 border-2 rounded-md p-2 w-[40px]"
          name="mostViewed"
          checked={formData.mostViewed}
          id="mostViewed"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="w-full xl:w-[1280px] h-full block">
        <Example
          placeholder={"hi"}
          onBlur={(newContent) => setBlog(newContent)}
          value={blog}
          className="h-[500px]"
        />
      </div>
      <div className="w-full xl:w-[1280px]">
        <button
          className="px-6 py-2 text-md font-semibold border-black/10 border-2 rounded-xl flex flex-row items-center justify-center transition-all duration-300 hover:bg-green-500 hover:text-white"
          onClick={handleSubmit}
        >
          <span>{isPosting ? "Blog Posting" : "Blog Post"}</span>
        </button>
      </div>
    </section>
  );
};
Example.propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func,
};

export default Update;
