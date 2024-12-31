import ReactDOM from "react-dom";
import App from "./App";
import { LoadScript } from "@react-google-maps/api";
import { Provider } from "react-redux";
import { store } from "./store";
import process from "process";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <App />
    </LoadScript>
  </Provider>
);
