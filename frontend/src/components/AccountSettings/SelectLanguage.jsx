import { isDarkAtom } from "@/store/atoms";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useAtomValue } from "jotai";
import PropTypes from "prop-types";

export const SelectLanguage = ({
  setLanguagePreferences,
  languagePreferences,
}) => {
  useEffect(() => {
    if (languagePreferences) {
      const temp = languagePreferences.map((item) => ({
        value: item,
        label: item.charAt(0).toUpperCase() + item.slice(1),
      }));
      setTempLanguages(temp);
    }
  }, [languagePreferences]);

  const [tempLanguages, setTempLanguages] = useState([]);
  const isDark = useAtomValue(isDarkAtom);
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

  const handleLanguageChange = (selectedOption) => {
    setTempLanguages(selectedOption);
    const selectedValues = selectedOption.map((option) => option.value);
    setLanguagePreferences(selectedValues);
  };
  return (
    <div>
      <Select
        options={languages}
        value={tempLanguages}
        onChange={handleLanguageChange}
        isMulti={true}
        styles={colourStyles}
        menuPlacement="top"
        maxMenuHeight={250}
      ></Select>
    </div>
  );
};

SelectLanguage.propTypes = {
  setLanguagePreferences: PropTypes.func.isRequired,
  languagePreferences: PropTypes.array,
};
