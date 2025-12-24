import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Test from "./Pages/Test";
import Test2 from "./Pages/Test2";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/test2" element={<Test2 />} />
    </Routes>
  );
};

export default App;
