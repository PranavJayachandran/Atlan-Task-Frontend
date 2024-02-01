import React from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../utils/dataHelper";

const ProjectDetails = () => {
  let { id } = useParams();
  console.log(id);
  let data;
  if (id != undefined) data = getDataById(parseInt(id));
  let heading =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.sdfdsfsdf sdfsdf";
  let description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
    commodi soluta quasi quisquam unde, minima excepturi eligendi ex
    voluptate, consequuntur provident aliquid alias neque, reprehenderit
    tenetur iure sapiente omnis architecto!`;
  let name = "Dam Bro";
  let date = "May 22, 2023";
  let code = `# Program to generate a random number between 0 and 9

  # importing the random module
  import random
  
  print(random.randint(0,9))
  `;
  let aboutTheAuthor =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias sequi ex perspiciatis excepturi eligendi maiores eos culpa earum hic? Voluptatum sunt, id odio aspernatur excepturi aperiam ab minima autem.";
  return (
    <div className="w-10/12 noscrollbar h-[439px] overflow-scroll ">
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
