import "../src/assets/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddEdit from "./components/AddEdit";
import Error from "./components/Error";


function Main() {
  return (
    <div className="App">
     

      <Router>
        <Routes>
          <Route>
         
            <Route index element={<Home />} />
            <Route path="/add" element={<AddEdit />}  />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="*" element={Error} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
