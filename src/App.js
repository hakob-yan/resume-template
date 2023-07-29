import React, { useEffect } from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import "./App.scss";

function App() {
  useEffect(() => {
    document.title = "My Resume";
  }, []);
  return (
    <div className="app">
      <Header />
      <WorkExperience />
      <Profile />
      <Education />
      <Skills />
      <Languages />
    </div>
  );
}

export default App;
