import html from './assets/html-icon.png';
import css from './assets/css-icon.png';
import js from './assets/js-icon.png';
import reactIcon from './assets/react.svg';
import csharp from './assets/csharp-icon.png';

import { useEffect } from 'react';

function Skills(){

    const skills = [html, css, js, reactIcon, csharp];

    useEffect(() => {
        const handleScroll = () => {
          const skillsContainer = document.getElementById('skills-container');
          const skillsWrapper = document.getElementById('skills-wrapper');
          const containerRect = skillsContainer.getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          if (containerRect.top < windowHeight && containerRect.bottom > 0) {
            const scrollProgress = Math.min(1, Math.max(0, (windowHeight - containerRect.top) / (windowHeight + containerRect.height)));
            const translateX = scrollProgress * 25; // Max translateX is 25%
            skillsWrapper.style.transform = `translateX(-${translateX}%)`;
          } else {
            skillsWrapper.style.transform = `translateX(0)`;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    
        // Initial check
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleScroll);
        };
      }, []);
    return(
        <div className="skills-container" id="skills-container">
            <div className="skills-item-wrapper" id='skills-wrapper'>
                {skills.map((skill, index) =>{
                    return <img className="skills-item" key={index} src={skill} alt='Skill'></img>
                })}
            </div>
        </div>
    );

}

export default Skills;

