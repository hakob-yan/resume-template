import React, { useEffect } from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import "./App.scss";

function App() {

  
  return (
    <div className="app">
      <Header />
      <div className="left-layout">
        <WorkExperience />
        <Education />
      </div>
      <div className="right-layout">
        <Profile />
        <Skills />
        <Languages />
      </div>
      
    </div>
  );
}

export default App;
