import { Link } from "react-router-dom";

const ProjectCards = () => {
  let heading = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.sdfdsfsdf sdfsdf";
  let description=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
  commodi soluta quasi quisquam unde, minima excepturi eligendi ex
  voluptate, consequuntur provident aliquid alias neque, reprehenderit
  tenetur iure sapiente omnis architecto!`
  let name = "Dam Bro"
  let date = "May 22, 2023";
  let id = 10;
  return (
    <Link to={`/projects/${id}`}>
    <div className="w-10/12 mb-4">
      <div className="bg-red-100 h-80 rounded-xl"></div>
      <div className="px-4 mt-4">
        <h1 className="text-2xl font-semibold">
          {heading}
        </h1>
        <p className="mt-4 text-[#aaacc3]">
         {description.substring(0,200)}{description.length>200?"...":""}
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="bg-red-400 h-10 w-10 rounded-full"></div>
          <div className="flex gap-2">
            <span>{name}</span>
            <span className="text-[#aaacc3]">{date}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCards;
