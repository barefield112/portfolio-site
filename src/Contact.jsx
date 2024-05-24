function Contact(){
    return(
        <div className="contact-background" id="contact">
            <div className="contact-container" >
            
            <div className="contact-text-content">
                <h2 className="section-header iswhite">Contact Me</h2>
                <p>I am excited to dive into the work of a full time front end developer. 
                    Even more than that I am eager to learn and grow with your company. Fill out the form if you beleive Im a good fit 
                    for your company</p>
                <ul>
                <li>Email: <a href="mailto:gagebarefield12@gmail.com">gagebarefield12@gmail.com</a></li>
                <li>Number: <a href="tel:785-280-2756">785-280-2756</a></li>
                </ul>
                <div className="social-links-wrapper">
                    <a href="https://github.com/barefield112" target='_blank'><img className="social-link"src="./src/assets/github.png"></img></a>
                    <a href="https://www.linkedin.com/in/aaron-barefield-3396b7201/" target='_blank'><img className="social-link" src="./src/assets/linkedi.png"></img></a>
                    <a href="https://x.com/gbarefield112?s=21" target='_blank'><img className="social-link" src="./src/assets/X.svg"></img></a>
                </div>
                
            </div>
            <div className="contact-info-wrapper">
               
            </div>
            {/*<form className="contact-form">
                <div className="form-item">
                    <label>Name: </label>
                    <input type="text"></input>
                </div>
                <div className="form-item">
                    <label>Email: </label>
                    <input type="email"></input>
                </div>
                <div className="form-item">
                    <label>Company: </label>
                    <input type="text"></input>
                </div>
                <div className="form-item message">
                    <label>Message: </label>
                    <input type="text" className="message-input"></input>
                </div>
                <input type="button" className="button form-button" value="Submit"/>
            </form>*/}
        </div>
        
        </div>
        
    );

}

export default Contact