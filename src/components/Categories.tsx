import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

const Categories = ({
  handleCategoryClick,
  activeCategory,
  setActiveCategory,
}: {
  handleCategoryClick: (category: string) => void;
  activeCategory: Record<string, boolean>;
  setActiveCategory: Dispatch<
    SetStateAction<{ TTS: boolean; VTS: boolean; NLP: boolean }>
  >;
}) => {
  return (
    <div className="text-[#aaacc3] w-3/12">
      <div>
        <h3>CATEGORIES</h3>
        <ul className="ml-6">
          <li className="text-yellow-400 my-2">
            <span
              className={`text-[#aaacc3] text-sm transition border-b border-transparent ease-in-out cursor-pointer hover:text-white ${
                activeCategory.TTS ? "border-white text-white" : ""
              }`}
              onClick={() => {
                setActiveCategory({ TTS: true, VTS: false, NLP: false });
                handleCategoryClick("Text-To-Speech");
              }}
            >
              Text-To-Speech
            </span>
          </li>
          <li className="text-blue-400 mb-2">
            <span
              className={`text-[#aaacc3] text-sm transition border-b border-transparent ease-in-out cursor-pointer hover:text-white ${
                activeCategory.VTS ? "border-white text-white" : ""
              }`}
              onClick={() => {
                setActiveCategory({ TTS: false, VTS: true, NLP: false });
                handleCategoryClick("Video To Text");
              }}
            >
              Video To Text
            </span>
          </li>
          <li className="text-red-400 mb-2">
            <span
              className={`text-[#aaacc3] text-sm transition border-b border-transparent ease-in-out cursor-pointer hover:text-white ${
                activeCategory.NLP ? "border-white text-white" : ""
              }`}
              onClick={() => {
                setActiveCategory({ TTS: false, VTS: false, NLP: true });
                handleCategoryClick("Natural Language Processing");
              }}
            >
              Natural Language Processing
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-10 text-white text-center">
        <Link
          to="/addentry"
          className="bg-[#1d5bdc] px-4 py-2 rounded transition ease-in-out hover:bg-white hover:text-blue-400"
        >
          Add a New Entry
        </Link>
      </div>
    </div>
  );
};

export default Categories;
