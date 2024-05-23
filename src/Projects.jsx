import ProjectItem from "./ProjectItem";

function Projects(){
    return(
        <>
        <div className="projects-container">
            <h2 className="section-header center-align">My Projects</h2>
            <div className="projects-grid-wrapper">
                <ProjectItem title="Tic Tac Toe" imagePath="./src/assets/tic-tac-toe.png" liveLink='https://barefield112.github.io/tic-tac-toe/'
                gitHubLink= 'https://github.com/barefield112/tic-tac-toe'></ProjectItem>
                <ProjectItem title ="Uno" imagePath="./src/assets/uno.png" liveLink="https://barefield112.github.io/uno.github.io/" gitHubLink="https://github.com/barefield112/uno.github.io"></ProjectItem>
            </div>
        </div>
        
        </>
    );
}

export default Projects