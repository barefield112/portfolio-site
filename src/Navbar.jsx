import { useState, useEffect } from 'react';

function Navbar(){
    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0)')
    
    useEffect(()=>{
        function handleScroll(){
            const scrollPosition = window.scrollY;

            if(scrollPosition>0){
                setBgColor('#171717');
            }
            else if (scrollPosition === 0){
                setBgColor('rgba(255, 255, 255, 0)');
            }
        }
        window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    return(
        <nav className="Navbar" style={{backgroundColor: bgColor}}>
            <div className="navbar-link-wrapper">
                <a className="navbar-links" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</a>
                <a className="navbar-links" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</a>
                <a className="navbar-links" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</a>
                <a className="navbar-links" href="https://github.com/barefield112" target='_blank'>GitHub</a>
            </div>
        </nav>
    )
}

export default Navbar