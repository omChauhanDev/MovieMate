import { useEffect, useState } from "react";
import Select from "react-select";
import { useAtomValue } from "jotai";
import { isDarkAtom } from "@/store/atoms";
import PropTypes from "prop-types";
export const SelectGenre = ({ setfavoriteGenres, favoriteGenres }) => {
  const [tempGenre, setTempGenre] = useState([]);
  const isDark = useAtomValue(isDarkAtom);
  useEffect(() => {
    if (favoriteGenres) {
      const temp = favoriteGenres.map((item) => ({
        value: item,
        label: item.charAt(0).toUpperCase() + item.slice(1),
      }));
      setTempGenre(temp);
    }
  }, [favoriteGenres]);

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#f9fafb" }),
    menu: (styles) => ({
      ...styles,

      backgroundColor: isDark ? "#09090b" : "white",
      borderColor: isDark ? "white" : "black",
      color: isDark ? "white" : "black",
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? (isDark ? "gray" : "#e6e6e6") : null,
      color: isFocused ? (isDark ? "white" : "black") : null,
      borderBottom: isDark
        ? "1px solid rgba(255, 255, 255, 0.3)"
        : "1px solid rgba(0, 0, 0, 0.3)",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      backgroundColor: isDark ? "#09090b" : "", // Set the background color for the selected option label
      color: isDark ? "white" : "", // Set the color for the selected option label
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      //suggest me colors based on dark and light mode
      marginLeft: "-1px",
      backgroundColor: isDark ? "#09090b" : "", // Set the background color for the selected option label
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
    setTempGenre(selectedOption);
    const selectedValues = selectedOption.map((option) => option.value);
    setfavoriteGenres(selectedValues);
  };

  return (
    <div>
      <Select
        options={genres}
        value={tempGenre}
        onChange={handleGenreChange}
        maxMenuHeight={250}
        isMulti={true}
        menuPlacement="top"
        styles={colourStyles}
      ></Select>
    </div>
  );
};

SelectGenre.propTypes = {
  setfavoriteGenres: PropTypes.func.isRequired,
  favoriteGenres: PropTypes.array,
};
