import axios from "axios";
import { useState, useEffect, createContext } from "react";
export const UserContext = createContext();
import PropTypes from "prop-types";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  UserProvider.propTypes = {
    children: PropTypes.object,
  };

  const login = async (i) => {
    const res = await axios.post("http://localhost:8800/api/login", i, {
      withCredentials: true,
    });
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
