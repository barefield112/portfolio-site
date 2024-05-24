import image from './assets/gagebarefield3.jpg';
function About(){
    return(
        <>
            <div className="about-container" id='about'>
                <div className="about-col">
                    <h2 className="section-header">Who is Gage Barefield</h2>
                    <p className="text-element">I began my programming journey in high school, learning HTML, CSS, and JavaScript in a Website 
                    Design class and building websites for faculty and sports teams. At Central Methodist University, I deepened my knowledge 
                    in Computer Science, mastering programming fundamentals and gaining practical experience with C#, Java, and Visual Studio.</p>
                    <p className="text-element">Post-college, I transitioned into freelancing, leveraging my skills in website design and 
                    Webflow to create mobile-responsive, user-friendly websites with CMS capabilities for clients. This role enhanced my 
                    ability to deliver tailored solutions, including custom animations and complex forms, effectively addressing client needs.</p>
                </div>
                <div className="about-col align-center">
                    <img src={image} alt="A picture of Gage Barefield" className='about-image'></img>
                </div>
            </div>
        </>
    );
}

export default About