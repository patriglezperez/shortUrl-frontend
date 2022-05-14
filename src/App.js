import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlFormHome from "./components/UrlFormHome/UrlFormHome";
import ShortUrl from "./components/ShortUrl/ShortUrl";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlFormHome />} />
          <Route path="/:shortUrl" element={<ShortUrl />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
