import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import UrlFormHome from "./components/UrlFormHome";
import SignIn from "./components/SignIn";
import Analytics from "./components/Analytics";
import ShortUrl from "./components/ShortUrl";
import Home from "./components/Home";
import Start from "./components/Start";
import StaticContext from "./assets/mycontext/staticContext";

function App() {
  return (
    <div>
      <StaticContext.Provider value={{ user: "", token: "" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/short" element={<UrlFormHome />} />
            <Route path="/:shortUrl" element={<ShortUrl />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />

            <Route path="/analytics" element={<Analytics />} />
            {/* <Route path="/urls/add" element={<NewUrl />} /> */}
          </Routes>
        </BrowserRouter>
      </StaticContext.Provider>
    </div>
  );
}

export default App;
