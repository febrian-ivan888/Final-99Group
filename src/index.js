import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

const rootElement = document.getElementById("root");
const store = {
  pic:
    "https://images.prismic.io/99-content/dc1594fb-f413-44ff-b8b5-c3ba6cd539cd_vbWkNuxt2hjgidVttoMRDX.jpg?auto=compress,format&w=2000&q=100",
  title: "Forett At Bukit Timah",
  address: "70 Anchorvale Crescent · D21",
  project_type: "Condo",
  year: 2021,
  ownership_type: "Freehold",
  psf_min: 2609,
  psf_max: 3043,
  subprice_label: "Prices from $1.99M",
  availabilities_label: "231 units · 1, 2, 3, 4 bedrooms",
  description: `Phone number: 8234 5678

Superb 3 bedroom in sentosa for a very affordable price and a very nearby bus
station.

Please call Alex B (CEA No: R0123456) @  82345678 or the owner (83456789) to arrange for a viewing.`
};

ReactDOM.render(
  <StrictMode>
    <App {...store} />
  </StrictMode>,
  rootElement
);
