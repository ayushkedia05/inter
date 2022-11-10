
import React, { useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import {  Routes, Route } from 'react-router-dom';
import Demo from "./components/Demo.js"
import axios from 'axios';
import Showdetails from "./components/intern";
import Choose from "./components/choose";

function App() {  

  

  return (
    <React.Fragment>
      
        <Routes>
        <Route path="/" element={<Choose/>}>
        </Route>
      
                 <Route path='/Quizzes' element={< Showdetails values="quizzes"/>}></Route>
                 <Route path='/Jobs' element={< Showdetails values="jobs"/>}></Route>
                 <Route path='/Scholarships' element={< Showdetails values="scholarships"/>}></Route>
                 <Route path='/Hackathons' element={< Showdetails values="hackathons"/>}></Route>
                 <Route path='/Internships' element={< Showdetails values="internships"/>}></Route>
                 

                 {/* <Route exact path='/contact' element={< Contact />}></Route> */}


        </Routes>
   
  

      
    </React.Fragment>
  );
}

export default App;
