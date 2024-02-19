import { useState } from "react";
import Select from "react-select";
export const SelectLanguage = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genres = [
    { value: "hindi", label: "Hindi" },
    { value: "english", label: "English" },
    { value: "marathi", label: "Marathi" },
    { value: "tamil", label: "Tamil" },
    { value: "telegu", label: "Telegu" },
  ];
  const handleGenreChange = (selectedOption) => {
    setSelectedGenres(selectedOption);
  };
  return (
    <div>
      <Select
        options={genres}
        value={selectedGenres}
        onChange={handleGenreChange}
        isMulti={true}
      ></Select>
    </div>
  );
};
