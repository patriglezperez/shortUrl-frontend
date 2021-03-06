import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlFormHome from "./components/UrlFormHome/UrlFormHome";
import ShortUrl from "./components/ShortUrl/ShortUrl";
import Error404 from "./components/Error404/Error404";
import Header from "./components/Header/Header";
import { StaticContextProvider } from "./context/staticContext";

function App() {
  return (
    <>
      <StaticContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<UrlFormHome />} />
            <Route path="/:shortUrl" element={<ShortUrl />} />
          </Routes>
        </BrowserRouter>
      </StaticContextProvider>
    </>
  );
}

export default App;
