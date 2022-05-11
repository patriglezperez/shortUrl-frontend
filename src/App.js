import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlFormHome from "./components/UrlFormHome/UrlFormHome";
import ShortUrl from "./components/ShortUrl/ShortUrl";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlFormHome />} />
          <Route path="/:shortUrl" element={<ShortUrl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
