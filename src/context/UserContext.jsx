import axios from "axios";
import { useState, useEffect, createContext } from "react";
export const UserContext = createContext();
import PropTypes from "prop-types";
import { apiWithAuth } from "../apis/axios/blogsAPIs";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  UserProvider.propTypes = {
    children: PropTypes.object,
  };

  // const login = async (i) => {
  //   try {
  //     const res = await apiWithAuth.post("/api/login", i);
  //     setUser(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const login = async (i) => {
    const res = await axios.post(
      "https://blog-website-g6cd.onrender.com/api/login",
      i,
      {
        withCredentials: true,
      }
    );
    setUser(res.data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // You can change this to "auto" for instant scrolling
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, scrollToTop }}>
      {children}
    </UserContext.Provider>
  );
};
