
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Overview />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}


export default App;
