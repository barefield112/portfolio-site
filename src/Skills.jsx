

function Skills(){

    const skills = ['./src/assets/html-icon.png', 
    './src/assets/css-icon.png', 
    './src/assets/js-icon.png', 
    './src/assets/react.svg', 
    './src/assets/csharp-icon.png']

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

