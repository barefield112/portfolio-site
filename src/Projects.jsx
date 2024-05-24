import ProjectItem from "./ProjectItem";
import gjjImg from './assets/gjjpooler.png';
import sgtsImg from './assets/sgts.png';
import unoImg from './assets/uno.png';
import tttImg from './assets/tic-tac-toe.png';
import stImg from './assets/swagtees.png';

function Projects(){
    return(
        <>
        <div className="projects-container" id="projects">
            <h2 className="section-header center-align">My Projects</h2>
            <div className="projects-grid-wrapper">
                <ProjectItem title="GJJ Pooler" imagePath={gjjImg}
                liveLink="https://www.poolerjj.com/"></ProjectItem>
                <ProjectItem title="Tic Tac Toe" imagePath={tttImg} liveLink='https://barefield112.github.io/tic-tac-toe/'
                gitHubLink= 'https://github.com/barefield112/tic-tac-toe'></ProjectItem>
                <ProjectItem title ="Uno" imagePath={unoImg} liveLink="https://barefield112.github.io/uno.github.io/" 
                gitHubLink="https://github.com/barefield112/uno.github.io"></ProjectItem>
                <ProjectItem title="Secret Garden Tattoo Studio" imagePath={sgtsImg}
                liveLink="https://www.secretgardentattoo.com/"></ProjectItem>
                <ProjectItem title="Swag Tees" imagePath= {stImg} 
                liveLink="https://swag-tees-bbe50b6ba0a585de0b0cda505fe4f.webflow.io/"></ProjectItem>
            </div>
        </div>
        
        </>
    );
}

export default Projects