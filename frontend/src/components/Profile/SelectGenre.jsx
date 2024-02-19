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
      ></Select>
    </div>
  );
};
