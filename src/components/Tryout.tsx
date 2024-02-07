import { useState } from "react";

const Tryout = ({
  category,
  link,
}: {
  category: string | undefined;
  link: string | undefined;
}) => {
  const [showResult, setShowResult] = useState(false);
  const handleFileChange = () => {
    setShowResult(true);
  };
  if (category == "Text-To-Speech")
    return (
      <div className="flex">
        <input
          className="mt-4 text-sm"
          type="file"
          onChange={handleFileChange}
          accept=".txt"
        />
        {showResult ? (
          <audio controls>
            <source src={link} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <></>
        )}
      </div>
    );
  else if (category == "Video To Text")
    return (
      <div className="flex flex-col">
        <input
          className="mt-4 text-sm"
          type="file"
          onChange={handleFileChange}
          accept=".mp4"
        />
        {showResult ? <iframe src={link} height={400} /> : <></>}
      </div>
    );
  else if (category == "Natural Language Processing")
    return (
      <div className="flex flex-col">
        <input
          className="mt-4 text-sm"
          type="file"
          onChange={handleFileChange}
          accept=".txt"
        />
        {showResult ? <iframe src={link} height={400} /> : <></>}
      </div>
    );
};

export default Tryout;
