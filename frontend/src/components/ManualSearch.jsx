// src/components/ManualSearch.js
import React from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const ManualSearch = ({ onSelectAddress }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    libraries: ["places"],
  });

  const autocompleteRef = React.useRef(null);

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      const address = place.formatted_address;
      const location = place.geometry.location;
      onSelectAddress({
        address,
        latitude: location.lat(),
        longitude: location.lng(),
      });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder="Search your address"
        style={{ width: "90%", padding: "10px" }}
      />
    </Autocomplete>
  );
};

export default ManualSearch;
