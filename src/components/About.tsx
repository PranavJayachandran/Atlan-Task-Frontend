import { Link } from "react-router-dom";
import image from "../assets/download__5_-removebg-preview.png";

const About = () => {
  return (
    <div className="sm:px-0 px-4 h-screen pt-20 overflow-hidden sm:w-screen text-white flex flex-col justify-center items-center">
      <div className="flex sm:flex-row flex-col gap-2 sm:gap-0">
        <div className="sm:mt-0 mt-10 w-full w-96 flex flex-col justify-center items-center">
          <h1 className="sm:text-4xl text-xl text-center">Atlan FE Task</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
            dtias earum ad ea, in id ut!
          </p>
          <div className="text-center mt-6">
            <Link
              to="/projects"
              className="sm:text-base text-sm bg-[#1d5bdc] sm:px-4 sm:py-2 px-2 py-1 rounded mr-4 transition ease-in-out hover:bg-white hover:text-blue-400"
            >
              Explore Projects
            </Link>
          </div>
        </div>
        <img
          src={image}
          className="text-center  sm:h-[400px]"
          alt="AI intelligence image"
        />
      </div>
    </div>
  );
};

export default About;
