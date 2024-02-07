import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../utils/dataHelper";
import Tryout from "./Tryout";

const ProjectDetails = () => {
  let { id } = useParams();
  let data;
  if (id != undefined) data = getDataById(parseInt(id));
  return (
    <div className="text-white w-full px-10 sm:px-20 noscrollbar sm:mt-0 mt-4  h-[700px] sm:h-[439px] overflow-scroll ">
      <div className="text-sm text-[#aaacc3]">Created on {data?.date}</div>
      <h1 className="text-lg font-semibold sm:text-2xl">{data?.title}</h1>
      <div className="mt-4 bg-red-100 h-40 sm:h-80 rounded-xl"></div>
      <div className="sm:text-sm text-xs text-center">
        Written by {data?.name}
      </div>
      <p className="sm:text-base text-sm indent-5 mt-4">{data?.description}</p>
      <div>
        <h2 className="text-lg mt-4">Code Sample</h2>
        <p className="bg-black block sm:hidden p-4 mt-2">
          <code>{data?.code}</code>
        </p>
        <pre className="bg-black hidden sm:block p-4 mt-2">
          <code>{data?.code}</code>
        </pre>
      </div>
      <div className="mt-4">
        <h2 className="text-sm sm:text-lg mb-2">About the Author</h2>
        <p className="sm:text-base text-sm">{data?.aboutTheAuthor}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl">Try out the model</h2>
        <Tryout category={data?.category} link={data?.link} />
      </div>
    </div>
  );
};

export default ProjectDetails;
