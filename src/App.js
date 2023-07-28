import React from 'react'
import Header from './components/Header';
import Education from './components/Education';
import Languages from './components/Languages';
import Profile from './components/Profile';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';



function App() {
  return (
    <div className="app">
     <Header/>
     <Education/>
     <Languages/>
     <Skills/>
     <Profile/>
     <WorkExperience/>
    </div>
  );
}

export default App;
