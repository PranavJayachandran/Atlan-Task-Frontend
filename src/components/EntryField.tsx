import React, { Dispatch, SetStateAction } from "react";

const EntryField = ({
  field,
  value,
  setValue,
  onerow,
}: {
  field: String;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onerow: boolean;
}) => {
  return (
    <div className="w-5/12 flex items-start gap-4">
      <div className="w-32">{field}</div>
      {onerow ? (
        <input
          className={`px-2 py-1 bg-transparent border rounded`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <textarea
          className={`px-2 py-1 w-80 bg-transparent border rounded`}
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default EntryField;
