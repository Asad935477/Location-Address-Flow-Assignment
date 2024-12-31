// src/App.js
import LocationModal from "./components/locationModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLocation } from "./store/locationSlice";

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();

  const handleEnableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setUserLocation({ latitude, longitude }));
          setShowModal(false);
        },
        (error) => {
          console.error("Error getting location", error);
          // Handle error (e.g., show a message)
        }
      );
    } else {
      console.error("Geolocation not supported");
      // Handle lack of support
    }
  };

  const handleSearchManually = () => {
    // Logic to switch to manual search
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <LocationModal
          onEnableLocation={handleEnableLocation}
          onSearchManually={handleSearchManually}
        />
      )}
      {/* Rest of your app */}
    </div>
  );
};

export default App;
