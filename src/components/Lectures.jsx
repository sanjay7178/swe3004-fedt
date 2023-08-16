import Module1 from "./Modules/Module1";
import Module2 from "./Modules/Module2";
import Module3 from "./Modules/Module3";
import Module4 from "./Modules/Module4";
import Module5 from "./Modules/Module5";
import Module6 from "./Modules/Module6";

const Lectures = () => {
  return (
    <>
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex flex-col text-center">
          <Module1 />
          <Module2 />
          <Module3 />
          <Module4 />
          <Module5 />
          <Module6 />
        </div>
      </div>
    </>
  );
};

export default Lectures;
