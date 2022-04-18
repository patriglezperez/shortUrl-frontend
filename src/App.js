import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlForm from "./components/UrlForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
