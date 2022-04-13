import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlForm from "./components/UrlForm";
import LinksResult from "./components/LinksResult";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlForm />} />
          <Route path="/:shortUrl" element={<LinksResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
