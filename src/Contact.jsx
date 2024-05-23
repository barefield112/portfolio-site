function Contact(){
    return(
        <div className="contact-background">
            <div className="contact-container" >
            
            <div className="contact-text-content">
                <h2 className="section-header iswhite">Contact Me</h2>
                <p>I am excited to dive into the work of a full time front end developer. 
                    Even more than that I am eager to learn and grow with your company. Fill out the form if you beleive Im a good fit 
                    for your company</p>
                <div className="social-links-wrapper">
                    <img className="social-link"src="./src/assets/github.png"></img>
                    <img className="social-link" src="./src/assets/linkedin.webp"></img>
                    <img className="social-link" src="./src/assets/x.jpg"></img>
                </div>
            </div>
            <form className="contact-form">
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
                <button className="button form-button">Send Message</button>
            </form>
        </div>
        
        </div>
        
    );

}

export default Contact