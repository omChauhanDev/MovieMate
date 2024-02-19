import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const SignUpForm = () => {
  const [city, setCity] = useState(null);

  const handleCitySelect = (city) => {
    setCity(city);
  };

  return (
    <form>
      {/* Other form fields */}
      <div>
        
      </div>
      {/* Submit button */}
    </form>
  );
};

export default SignUpForm;
