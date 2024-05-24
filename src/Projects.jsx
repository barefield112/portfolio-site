import ProjectItem from "./ProjectItem";

function Projects(){
    return(
        <>
        <div className="projects-container" id="projects">
            <h2 className="section-header center-align">My Projects</h2>
            <div className="projects-grid-wrapper">
                <ProjectItem title="GJJ Pooler" imagePath="./src/assets/gjjpooler.png"
                liveLink="https://www.poolerjj.com/"></ProjectItem>
                <ProjectItem title="Tic Tac Toe" imagePath="./src/assets/tic-tac-toe.png" liveLink='https://barefield112.github.io/tic-tac-toe/'
                gitHubLink= 'https://github.com/barefield112/tic-tac-toe'></ProjectItem>
                <ProjectItem title ="Uno" imagePath="./src/assets/uno.png" liveLink="https://barefield112.github.io/uno.github.io/" 
                gitHubLink="https://github.com/barefield112/uno.github.io"></ProjectItem>
                <ProjectItem title="Secret Garden Tattoo Studio" imagePath="./src/assets/sgts.png"
                liveLink="https://www.secretgardentattoo.com/"></ProjectItem>
                <ProjectItem title="Swag Tees" imagePath="./src/assets/swagtees.png"   
                liveLink="https://swag-tees-bbe50b6ba0a585de0b0cda505fe4f.webflow.io/"></ProjectItem>
            </div>
        </div>
        
        </>
    );
}

export default Projects