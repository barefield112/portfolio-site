import html from './assets/html-icon.png';
import css from './assets/css-icon.png';
import js from './assets/js-icon.png';
import reactIcon from './assets/react.svg';
import csharp from './assets/csharp-icon.png';

function Skills(){

    const skills = [html, 
   css, 
    js, 
    reactIcon, 
    csharp]

    return(
        <div className="skills-container">
            <div className="skills-item-wrapper" id='skills-wrapper'>
                {skills.map((skill, index) =>{
                    return <img className="skills-item" key={index} src={skill} alt='Skill'></img>
                })}
            </div>
        </div>
    );

}

export default Skills;

