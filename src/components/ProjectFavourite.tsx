import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IData } from "../interface/IData";
import { getData, getFavouriteData } from "../utils/dataHelper";
import Categories from "./Categories";
import ProjectCards from "./ProjectCards";

const ProjectFavourite = () => {
  let location = useLocation();
  const [data, setData] = useState<Array<IData>>([]);
  const [completeData, setCompleteData] = useState<Array<IData>>([]);
  const [activeCategory, setActiveCategory] = useState({
    TTS: false,
    VTS: false,
    NLP: false,
  });
  useEffect(() => {
    let temp: IData[] = [];
    if (location.pathname == "/projects") temp = getData();
    else temp = getFavouriteData();
    setCompleteData(temp);
    setData(temp);
    setActiveCategory({
      TTS: false,
      VTS: false,
      NLP: false,
    });
  }, [location]);
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
      <Categories
        handleCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="w-9/12 h-[439px] overflow-scroll noscrollbar flex flex-col gap-10">
        {data?.map((item) => (
          <ProjectCards item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectFavourite;
