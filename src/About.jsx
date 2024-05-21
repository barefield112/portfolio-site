import image from './assets/gagebarefield3.jpg';
function About(){
    return(
        <>
            <div className="about-container">
                <div className="about-col">
                    <h2 className="section-header">Who is Gage Barefield</h2>
                    <p className="text-element">I began my programming jounrey in high school when I enrolled into my first Website Design
                    class. There I learned to code websites with <strong>HTML, CSS, and JavaScript</strong> and created websites for the faculty members and sport teams. 
                    I continued my eduation by attending Central Methodist University where I majored in Computer Science. There I learned 
                    programming concepts and fundumentals and gained hands on experince with <strong>C#, Java, and Visual Studios</strong>.</p>
                    <p className="text-element">After college, I began to delve into Freelancing, using my website design exprince
                    coupled with the power of <strong>Webflow</strong> to build websites for my clients that where mobile responsive and easy to use with  <strong>CMS</strong> capabilites. This gave me the experince i needed to help my clients solve their problem such as custom animations or
                    wholesale order forms</p>
                </div>
                <div className="about-col align-center">
                    <img src={image} alt="A picture of Gage Barefield" className='about-image'></img>
                </div>
            </div>
        </>
    );
}

export default About