import React, { useEffect, useState } from "react"; // Import React and destructured hooks
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GithubCorner from "react-github-corner";
import ScrollToTop from "react-scroll-to-top";
import Lectures from "./components/Lectures";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleBackgroundChange = () => {
      const localTheme = localStorage.getItem("theme");
      console.log(localTheme);
      const isDark = localTheme === "dark" || localTheme === "light";
      console.log(isDark);
      if (localTheme === "dark") {
        setIsDarkBackground(true);
      } else {
        setIsDarkBackground(false);
      }
    };
    handleBackgroundChange();
  }, [isDarkBackground]); // Empty dependency array means this effect will run only once

  return (
    <div>
      {" "}
      {/* Wrapping content in a <div> */}
      <ScrollToTop smooth color="white" className="bg-black" />
      <Navbar />
      <GithubCorner
        className={`fixed top-0 right-0 z-10 ${
          isDarkBackground ? "invert" : ""
        }`}
        href="https://github.com/sanjay7178/swe3004-fedt.git"
        target="_blank"
      />
      <Hero />
      <Lectures />
      <Footer />
    </div>
  );
}
