import React from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../utils/dataHelper";

const ProjectDetails = () => {
  let { id } = useParams();
  console.log(id);
  let data;
  if (id != undefined) data = getDataById(parseInt(id));
  return (
    <div className="text-white w-full px-20 noscrollbar h-[439px] overflow-scroll ">
      <div className="text-sm text-[#aaacc3]">Created on {data?.date}</div>
      <h1 className="text-2xl">{data?.heading}</h1>
      <div className="mt-4 bg-red-100 h-80 rounded-xl"></div>
      <div className="text-sm text-center">Written by {data?.name}</div>
      <p className="indent-5 mt-4">{data?.description}</p>
      <div>
        <h2 className="text-lg mt-4">Code Sample</h2>
        <pre className="bg-black p-4 mt-2">
          <code>{data?.code}</code>
        </pre>
      </div>
      <div className="mt-4">
        <h2 className="text-lg mb-2">About the Author</h2>
        <p>{data?.aboutTheAuthor}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
