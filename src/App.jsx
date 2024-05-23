import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {

  return (
    <div className="background-texture">
      <div className="page-wrapper">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
    </div>
    
  )
}

export default App
