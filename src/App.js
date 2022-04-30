import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import UrlFormHome from "./components/UrlFormHome";
import SignIn from "./components/SignIn";
import Analytics from "./components/Analytics";
import ShortUrl from "./components/ShortUrl";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlFormHome />} />
          <Route path="/:shortUrl" element={<ShortUrl />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* <Route path="/urls/add" element={<NewUrl />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
