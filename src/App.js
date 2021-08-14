import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountryData from "./components/CountryData";
import Country from "./components/Country";

// import CountryHeader from "./components/CountryHeader";
const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={CountryData} exact />
        <Route path="/countries/:name" component={Country} exact />
      </Router>
    </div>
  );
};

export default App;
