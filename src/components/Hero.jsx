import {
  FaAngular,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {RiBootstrapFill} from "react-icons/ri";
import { IoLogoIonic } from "react-icons/io";
import { SiRxjs, SiRedux } from 'react-simple-icons';
import {SiMaterialdesign} from 'react-icons/si'

const Hero = () => {
  return (
    <div
      className="hero max-h-[1200px] min-h-[500px] bg-center bg-cover]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex hero-content flex-col md:flex-row">
        <div className="flex flex-row">
          <div>
            <h1 className="text-[30px] font-bold text-white">VIT-AP</h1>
            <h1 className="text-[25px] font-bold text-white">
              Course : Front End Design and Testing (SWE3004)
            </h1>
            <h1 className="text-lg  text-white">
              To understand JavaScript based MVC Framework, UI Componentization
              and steps to develop a scalable UI application and acquire
              knowledge on Reactive Programming, Responsive web Design, Multi
              Device Compatible applications (RWD), Native Mobile Apps
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 mr-6">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="col-span-3">
            </div>
              <FaAngular className="text-white text-5xl" />
            <FaHtml5 className="text-white text-5xl" />
            <FaCss3 className="text-white text-5xl" />
            <FaJs className="text-white text-5xl" />
            <FaNodeJs className="text-white text-5xl" />
            <FaReact className="text-white text-5xl" />
            <RiBootstrapFill className="text-white text-5xl" />
            <IoLogoIonic className="text-white text-5xl" />
            <SiMaterialdesign className="text-white text-5xl" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
