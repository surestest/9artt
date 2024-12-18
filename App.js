import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Body from "./Body";
import ChartBoard from "./ChartBoard";
import DashBoard from "./DashBoard"
import  FormHandle from "./FormHandle"
import Form from "./Form"
import Forming from "./Forming"
import File from "./File"
 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/chatboats" element={<ChartBoard />} />
        <Route path="/collections" element={<Body />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/formhandle" element={<FormHandle/>} />
        <Route path="/adddepartment" element={<Form/>} />
        <Route path="/adddd" element={<Forming/>} />
        <Route path="/add" element={<File/>} />
        {}
      </Routes>
    </Router>
  );
};

export default App;
