import { useState, useEffect, useRef } from 'react';

function Navbar() {
    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0)');
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;

            // Change background color based on scroll position
            if (scrollPosition > 0) {
                setBgColor('#171717');
            } else {
                setBgColor('rgba(255, 255, 255, 0)');
            }

            // Show or hide navbar based on scroll direction
            if (scrollPosition > lastScrollTop.current) {
                // Scrolling down
                setShowNavbar(false);
            } else {
                // Scrolling up
                setShowNavbar(true);
            }
            lastScrollTop.current = scrollPosition <= 0 ? 0 : scrollPosition; // For Mobile or negative scrolling
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="Navbar" style={{ backgroundColor: bgColor, top: showNavbar ? '0' : '-100px', transition: 'top 0.3s' }}>
            <div className="navbar-link-wrapper">
                <a className="navbar-links" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</a>
                <a className="navbar-links" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</a>
                <a className="navbar-links" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</a>
                <a className="navbar-links" href="https://github.com/barefield112" target='_blank' rel='noopener noreferrer'>GitHub</a>
            </div>
        </nav>
    );
}

export default Navbar;
