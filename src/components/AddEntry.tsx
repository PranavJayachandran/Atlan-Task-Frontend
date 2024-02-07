import { useState } from "react";
import EntryField from "./EntryField";
import ErrorComponent from "./ErrorComponent";
import { addEntry } from "../utils/dataHelper";
import { redirect, useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [codeSample, setCodeSample] = useState("");
  const [author, setAuthor] = useState("");
  const [aboutTheAuthor, setaboutTheAuthor] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Options for the dropdown
  const options = [
    "Text-To-Speech",
    "Video To Text",
    "Natural Language Processing",
  ];
  const addData = () => {
    if (title == "") {
      setError("Title should not be empty");
      const timeoutId = setTimeout(() => {
        setError("");
      }, 4000);
    } else if (description == "") {
      setError("Description should not be empty");
      const timeoutId = setTimeout(() => {
        setError("");
      }, 4000);
    }
    if (codeSample == "") {
      setError("CodeSample should not be empty");
      const timeoutId = setTimeout(() => {
        setError("");
      }, 4000);
    }
    if (author == "") {
      setError("Author should not be empty");
      const timeoutId = setTimeout(() => {
        setError("");
      }, 4000);
    }
    if (aboutTheAuthor == "") {
      setError("About the author should not be empty");
      const timeoutId = setTimeout(() => {
        setError("");
      }, 4000);
    } else if (selectedOption == "") {
      setError("Select a category");
      const timeoutId = setTimeout(() => {
        setError("");
      }, 4000);
    } else {
      addEntry(
        title,
        description,
        codeSample,
        author,
        aboutTheAuthor,
        selectedOption
      );
      navigate("/projects");
    }
  };
  return (
    <div className="flex h-[439px] w-screen noscrollbar overflow-x-hidden overflow-scroll  flex-col items-center text-white px-20">
      {error ? <ErrorComponent errorMessage={error} /> : <></>}
      <h1 className="text-2xl">Add an entry</h1>
      <div className="px-20 flex flex-col items-center mt-4 gap-10 w-screen">
        <EntryField
          field="Title"
          value={title}
          setValue={setTitle}
          onerow={true}
        />
        <EntryField
          field="Description"
          value={description}
          setValue={setDescription}
          onerow={false}
        />
        <EntryField
          field="CodeSample"
          value={codeSample}
          setValue={setCodeSample}
          onerow={false}
        />
        <EntryField
          field="Author"
          value={author}
          setValue={setAuthor}
          onerow={true}
        />
        <EntryField
          field="About the Author"
          value={aboutTheAuthor}
          setValue={setaboutTheAuthor}
          onerow={false}
        />
        <div className="flex w-5/12">
          <div className="w-36">Select a category:</div>
          <select
            id="dropdown"
            className="px-2 py-1 bg-transparent border rounded"
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            <option value="" className="px-2 py-1 bg-[#1a1d2e] border rounded">
              Select...
            </option>
            {options.map((option, index) => (
              <option
                className="px-2 py-1 bg-[#1a1d2e] border rounded"
                key={index}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="bg-[#1d5bdc] px-4 py-2 rounded mr-4 transition ease-in-out hover:bg-white hover:text-blue-400"
            onClick={addData}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
