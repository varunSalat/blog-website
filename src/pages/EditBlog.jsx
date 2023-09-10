import { useState, useRef, useContext, useEffect } from "react";
import { Btn } from "../components";
import JoditEditor from "jodit-react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import Loader from "../layouts/Loader";
import { useParams } from "react-router-dom";

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

const EditBlog = () => {
  const { login, user } = useContext(UserContext);
  const { blogUrl } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState(null);
  const [blog, setBlog] = useState(null);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/blog/${blogUrl}`
        );
        setFormData(response.data.blog); // Set the data state with the fetched data
        setBlog(response.data.blog.blog);
        setIsLoading(false); // Set loading state to false when data is available
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };
    fetchData();
  }, [blogUrl]);
  console.log(formData);
  const handleInputChange = (e) => {
    if (e.target.name === "mostViewed") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleChecked = (e) => {
    setFormData({ ...formData, isMostViewed: e.target.checked });
  };

  const handleSubmit = async () => {
    const newBlog = await axios
      .post(
        "http://localhost:8800/api/edit",
        { ...formData, blog: blog },
        { withCredentials: true }
      )
      .catch((err) => console.log(err));

    console.log(newBlog);
  };

  const handleLogin = async () => {
    await login(loginData);
  };

  if (isLoading) {
    return <Loader />;
  }
  console.log(formData.mostViewed);

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
          Editing Article
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
          <option value="News">News</option>
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
          checked={formData.isMostViewed}
          id="mostViewed"
          onChange={(e) => handleChecked(e)}
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
        <Btn title="Edit Blog" onClick={handleSubmit} />
      </div>
    </section>
  );
};

export default EditBlog;
