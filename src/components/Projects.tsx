import React from "react";
import ProjectCards from "./ProjectCards";
import { useLocation } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { getData } from "../utils/dataHelper";

const Projects = () => {
  let location = useLocation();
  let data = getData();
  return (
    <div className=" text-white flex w-full px-20">
      <div className="text-[#aaacc3] w-3/12">
        <h3>CATEGORIES</h3>
        <ul className="ml-6">
          <li className="text-yellow-400 my-2">
            <span className="text-[#aaacc3] text-sm transition ease-in-out cursor-pointer hover:text-white">
              Text-To-Speech
            </span>
          </li>
          <li className="text-blue-400 mb-2">
            <span className="text-[#aaacc3] text-sm transition ease-in-out cursor-pointer hover:text-white">
              Video To Text
            </span>
          </li>
          <li className="text-red-400 mb-2">
            <span className="text-[#aaacc3] text-sm transition ease-in-out cursor-pointer hover:text-white">
              Natural Language Processing
            </span>
          </li>
        </ul>
      </div>
      {location.pathname == "/projects" ? (
        <div className="w-9/12 h-[439px] overflow-scroll noscrollbar flex flex-col gap-10">
          {data.map((item) => (
            <ProjectCards item={item} />
          ))}
        </div>
      ) : (
        <ProjectDetails />
      )}
    </div>
  );
};

export default Projects;
