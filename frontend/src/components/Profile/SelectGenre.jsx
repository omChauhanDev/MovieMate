import { useState } from "react";
import Select from "react-select";
import { useAtomValue } from "jotai";
import { isDarkAtom } from "@/store/atoms";

export const SelectGenre = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const isDark = useAtomValue(isDarkAtom);
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? (isDark ? "gray" : "lightgray") : null,
      color: isFocused ? (isDark ? "white" : "black") : null,
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      backgroundColor: isDark ? "gray" : "", // Set the background color for the selected option label
      color: isDark ? "white" : "", // Set the color for the selected option label
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      //suggest me colors based on dark and light mode
      backgroundColor: isDark ? "gray" : "", // Set the background color for the selected option label
      color: isDark ? "white" : "", // Set the color for the selected option label
    }),
  };

  const genres = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "drama", label: "Drama" },
    { value: "fantasy", label: "Fantasy" },
    { value: "historical", label: "Historical" },
    { value: "horror", label: "Horror" },
    { value: "mystery", label: "Mystery" },
    { value: "philosophical", label: "Philosophical" },
    { value: "political", label: "Political" },
    { value: "romance", label: "Romance" },
    { value: "saga", label: "Saga" },
    { value: "satire", label: "Satire" },
    { value: "science fiction", label: "Science Fiction" },
    { value: "social", label: "Social" },
    { value: "speculative", label: "Speculative" },
    { value: "thriller", label: "Thriller" },
    { value: "urban", label: "Urban" },
    { value: "western", label: "Western" },
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
        maxMenuHeight={150}
        isMulti={true}
        styles={colourStyles}
      ></Select>
    </div>
  );
};
