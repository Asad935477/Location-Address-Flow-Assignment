const LocationModal = ({ onEnableLocation, onSearchManually }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Allow Location Access</h2>
        <p>We need your location to provide better services.</p>
        <button onClick={onEnableLocation}>Enable Location</button>
        <button onClick={onSearchManually}>Search Manually</button>
      </div>
    </div>
  );
};

export default LocationModal;
