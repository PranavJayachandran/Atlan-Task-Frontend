import React, { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";
import { useLocation } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { getData } from "../utils/dataHelper";
import { IData } from "../interface/IData";

const Projects = () => {
  let location = useLocation();
  const [data, setData] = useState<Array<IData>>([]);
  const [completeData, setCompleteData] = useState<Array<IData>>([]);
  useEffect(() => {
    let temp = getData();
    setCompleteData(temp);
    setData(temp);
  }, []);
  const handleCategoryClick = (category: string) => {
    let temp = completeData;
    console.log(temp, completeData, data);
    temp = temp.filter((item) => {
      console.log(item.category, category, item.category == category);
      if (item.category == category) return item;
    });
    console.log(temp);
    setData(temp);
  };
  return (
    <div className=" text-white flex w-full px-20">
      <div className="text-[#aaacc3] w-3/12">
        <h3>CATEGORIES</h3>
        <ul className="ml-6">
          <li className="text-yellow-400 my-2">
            <span
              className="text-[#aaacc3] text-sm transition ease-in-out cursor-pointer hover:text-white"
              onClick={() => {
                handleCategoryClick("Text-To-Speech");
              }}
            >
              Text-To-Speech
            </span>
          </li>
          <li className="text-blue-400 mb-2">
            <span
              className="text-[#aaacc3] text-sm transition ease-in-out cursor-pointer hover:text-white"
              onClick={() => {
                handleCategoryClick("Video To Text");
              }}
            >
              Video To Text
            </span>
          </li>
          <li className="text-red-400 mb-2">
            <span
              className="text-[#aaacc3] text-sm transition ease-in-out cursor-pointer hover:text-white"
              onClick={() => {
                handleCategoryClick("Natural Language Processing");
              }}
            >
              Natural Language Processing
            </span>
          </li>
        </ul>
      </div>
      {location.pathname == "/projects" ? (
        <div className="w-9/12 h-[439px] overflow-scroll noscrollbar flex flex-col gap-10">
          {data?.map((item) => (
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
