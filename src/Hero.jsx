import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const subheader = "Specializing in HTML, CSS, JavaScript, React, & C#";
  const intervalTime = 100;
  const [output, setOutput] = useState("");
  const iRef = useRef(0);

  useEffect(()=> {
    const intervalId = setInterval(updateString, intervalTime);

    function updateString(){
        const i = iRef.current;
        if(i < subheader.length){
            setOutput((prevOutput) => prevOutput + subheader[i]);
            iRef.current++;
        }else{
            clearInterval(intervalId);
        }
    }
    return() => clearInterval(intervalId);
  }, [subheader]);


  return (
    <div className="hero-container">
      <div className="overlay">
        <div className="hero-content-wrapper">
          <h1 className="hero-header">Gage Barefield : Web Developer</h1>
          <p className="hero-subheader">{output}</p>
          <div className="button-group">
            <button className="button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
            <button className="button secondary" onClick= {()=> document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>My Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
