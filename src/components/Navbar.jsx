import { VscGithubInverted } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Swap from "./Swap";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowTitle(window.innerWidth >= 666);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="border-b-black sticky top-0 z-10">
        <div className="navbar bg-base-100 ">
          <div className="flex-1 ">
            <a className="btn btn-ghost text-[17px] font-bold">
              {showTitle
                ? "SWE3004-FRONTEND DESIGN AND TESTING COURSE"
                : "SWE3004-fedt"}
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-0 text-[17px] pt-3">
              <li>
                <Swap />
              </li>
              <li className="pr-11">
                <details className="md:hidden">
                  <summary>Menu</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>HOME</a>
                    </li>
                    <li>
                      <a>LECTURES</a>
                    </li>
                    <li>
                      <a>OVERVIEW</a>
                    </li>
                    <li>
                      <a>F.A.Q</a>
                    </li>
                  </ul>
                </details>
              </li>

              <ul className="pr-[70px] hidden md:flex flex-row">
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>LECTURES</a>
                </li>
                <li>
                  <a>OVERVIEW</a>
                </li>
                <li>
                  <a>F.A.Q</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
