import PropTypes from 'prop-types';
function ProjectItem(props){

    return(
        <div className="project-item">
            <h3>{props.title}</h3>
            <img className='project-img' src={props.imagePath}></img>
            <div className="button-group">
                <a target='_blank' href={props.liveLink}><button className="button">Live Link</button></a>
                <a target='_blank' href={props.gitHubLink}><button className="button underline">GitHub Repo</button></a>
            </div>
        </div>
    );
}

ProjectItem.propTypes = {
    title : PropTypes.string,
    imagePath : PropTypes.string,
    liveLink : PropTypes.string,
    gitHubLink : PropTypes.string,
}

ProjectItem.defaultProps = {
    title : 'Project Title',
    imagePath : './src/assets/react.svg',
    liveLink : '',
    gitHubLink : 'https://github.com/barefield112',
}

export default ProjectItem