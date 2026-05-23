import { useState } from 'react'
import './App.css'

import HeaderSection from './components/Header'
import AboutMeSection from './components/AboutMe'
import SkillsSection from './components/Skills'
import WorkSection from './components/WorkExp'
import EducationSection from './components/Education'
import VolunteerSection from './components/Volunteer'

function App() {
  return (
    <div className="min-h-screen">
      <HeaderSection />

      <div className="p-6 md:p-16 md:pb-0 lg:p-4 lg:px-16">
        <AboutMeSection />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Left Green Section */}
        <div className="p-6 md:p-12 pt-2">
          <SkillsSection />
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 lg:pl-0 md:pl-0">
          <WorkSection/>
          <VolunteerSection />
          <EducationSection />
        </div>
      </div>
    </div>
  )
}

export default App