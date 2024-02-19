import { useState } from "react";
import Select from "react-select";
export const SelectGenre = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genres = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "drama", label: "Drama" },
    { value: "fantasy", label: "Fantasy" },
    { value: "horror", label: "Horror" },
    { value: "mystery", label: "Mystery" },
    { value: "romance", label: "Romance" },
    { value: "science fiction", label: "Science Fiction" },
    { value: "thriller", label: "Thriller" },
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
