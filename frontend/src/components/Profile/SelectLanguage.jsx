import { useState } from "react";
import Select from "react-select";
export const SelectLanguage = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "chinese", label: "Chinese" },
    { value: "arabic", label: "Arabic" },
    { value: "bengali", label: "Bengali" },
    { value: "russian", label: "Russian" },
    { value: "portuguese", label: "Portuguese" },
    { value: "japanese", label: "Japanese" },
    { value: "urdu", label: "Urdu" },
    { value: "punjabi", label: "Punjabi" },
    { value: "telugu", label: "Telugu" },
    { value: "tamil", label: "Tamil" },
    { value: "marathi", label: "Marathi" },
    { value: "turkish", label: "Turkish" },
    { value: "korean", label: "Korean" },
    { value: "vietnamese", label: "Vietnamese" },
    { value: "italian", label: "Italian" },
    { value: "thai", label: "Thai" },
    { value: "gujarati", label: "Gujarati" },
    { value: "polish", label: "Polish" },
    { value: "ukrainian", label: "Ukrainian" },
    { value: "malayalam", label: "Malayalam" },
    { value: "kannada", label: "Kannada" },
    { value: "oriya", label: "Oriya" },
    { value: "sindhi", label: "Sindhi" },
    { value: "serbian", label: "Serbian" },
    { value: "swedish", label: "Swedish" },
    { value: "dutch", label: "Dutch" },
    { value: "greek", label: "Greek" },
    { value: "czech", label: "Czech" },
    { value: "finnish", label: "Finnish" },
    { value: "hungarian", label: "Hungarian" },
    { value: "hebrew", label: "Hebrew" },
    { value: "indonesian", label: "Indonesian" },
    { value: "nepali", label: "Nepali" },
    { value: "norwegian", label: "Norwegian" },
    { value: "persian", label: "Persian" },
    { value: "slovak", label: "Slovak" },
    { value: "swahili", label: "Swahili" },
    { value: "taiwanese", label: "Taiwanese" },
    { value: "tibetan", label: "Tibetan" },
    { value: "zulu", label: "Zulu" },
    { value: "malay", label: "Malay" },
    { value: "filipino", label: "Filipino" },
    { value: "burmese", label: "Burmese" },
    { value: "amharic", label: "Amharic" },
    { value: "somali", label: "Somali" },
    { value: "kurdish", label: "Kurdish" },
    { value: "uzbek", label: "Uzbek" },
    { value: "bhojpuri", label: "Bhojpuri" },
    { value: "farsi", label: "Farsi" },
  ];

  const handleGenreChange = (selectedOption) => {
    setSelectedGenres(selectedOption);
  };
  return (
    <div>
      <Select
        options={languages}
        value={selectedGenres}
        onChange={handleGenreChange}
        isMulti={true}
        maxMenuHeight={150}
      ></Select>
    </div>
  );
};
