import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function ScrollToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top fixed bottom-5 right-5 px-2 py-2 rounded-md ${
        isButtonVisible ? "block" : "hidden"
      } bg-primary text-white`}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon style={{ fontSize: "2rem" }} />
    </button>
  );
}

export default ScrollToTopButton;
