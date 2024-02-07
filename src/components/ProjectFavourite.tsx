import { useEffect, useState } from "react";
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
  const fetchData = async () => {
    let temp: IData[] = [];
    if (location.pathname == "/projects") temp = await getData();
    else temp = await getFavouriteData();
    setCompleteData(temp);
    setData(temp);
    setActiveCategory({
      TTS: false,
      VTS: false,
      NLP: false,
    });
  };
  useEffect(() => {
    fetchData();
  }, [location]);
  useEffect(() => {
    handleCategoryClick();
  }, [activeCategory]);
  const handleCategoryClick = () => {
    let category = "";
    if (activeCategory.TTS == true) category = "Text-To-Speech";
    if (activeCategory.VTS == true) category = "Video To Text";
    if (activeCategory.NLP == true) category = "Natural Language Processing";

    if (category === "") {
      setData(completeData);
    } else {
      let temp = completeData;
      temp = temp.filter((item) => {
        if (item.category == category) return item;
      });
      setData(temp);
    }
  };
  return (
    <div className="sm:mt-0 mt-4 text-white flex w-full sm:px-20 px-4">
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="w-10/12 sm:w-9/12 sm:h-[439px] h-[680px] overflow-scroll noscrollbar flex flex-col gap-10">
        {data?.map((item, index) => (
          <ProjectCards item={item} key={index} />
        ))}
        {data.length == 0 ? <div>No data present to be shown</div> : <></>}
      </div>
    </div>
  );
};

export default ProjectFavourite;
