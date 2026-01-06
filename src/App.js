import React from 'react';
import { Toaster } from 'sonner';
import Navigation from './Components/Navigation';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import Skills from './Components/Skills';
import ExperienceSection from './Components/WorkExperience';
import ProjectsSection from './Components/ProjectSec';
import EducationSection from './Components/EducationSec';
import CertificationsSection from './Components/CertificationSection';
import ContactSection from './Components/Contacts';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <Skills />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;