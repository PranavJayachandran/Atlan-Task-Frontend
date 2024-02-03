import { Link } from "react-router-dom";
import image from "../assets/download__5_-removebg-preview.png";

const About = () => {
  return (
    <div className="h-[439px] text-white flex flex-col justify-center items-center">
      <div className="flex">
        <div className="w-full w-96 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center">Atlan FE Task</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
            dtias earum ad ea, in id ut!
          </p>
          <div className="text-center mt-6">
            <Link
              to="/projects"
              className="bg-[#1d5bdc] px-4 py-2 rounded mr-4 transition ease-in-out hover:bg-white hover:text-blue-400"
            >
              Explore Projects
            </Link>
            <Link
              to="/contacts"
              className="bg-[#1d5bdc] px-4 py-2 rounded transition ease-in-out hover:bg-white hover:text-blue-400"
            >
              Contact
            </Link>
          </div>
        </div>
        <img src={image} className="h-[400px] " />
      </div>
    </div>
  );
};

export default About;
