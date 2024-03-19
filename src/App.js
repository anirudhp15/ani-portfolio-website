import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import 'katex/dist/katex.min.css';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className='main-container'>
      <Navbar />  
      <Hero />
      <Introduction />
      <Education />
      <Experiences/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
