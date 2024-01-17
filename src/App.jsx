import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks } from "./components";
import Context from "./context/context.js";
import {navLinks, services, technologies, experiences, testimonials, projects} from './constants/en';
import {navLinksPt, servicesPt, technologiesPt, experiencesPt, testimonialsPt, projectsPt} from './constants/pt-br';


function App() {
  const { setLanguage, setConstants} = useContext(Context);
  useEffect(() => {
    if(navigator.language === 'pt-BR') {
    setLanguage('pt-br');
    setConstants({
      navLinks: navLinksPt,
      services: servicesPt,
      technologies: technologiesPt,
      experiences: experiencesPt,
      testimonials: testimonialsPt,
      projects: projectsPt
   });
  } else {
    setConstants({
      navLinks,
      services,
      technologies,
      experiences,
      testimonials,
      projects
    });
  }
  }, [])
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>       
      </div>
    </BrowserRouter>
  )
}

export default App
