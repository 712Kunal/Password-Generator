import React from "react";
import Passwordgen from "./Components/Passwordgen.jsx";
import Landing from "./Components/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Password-Generator/" element={<Landing />} />
          <Route path="/Password-Generator/passwordgen" element={<Passwordgen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
