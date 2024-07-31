import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import CountryDetail from "./CountryDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DataDisplay />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
