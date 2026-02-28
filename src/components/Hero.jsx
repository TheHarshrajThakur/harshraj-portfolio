import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const roles = [
        "Full Stack Developer",
        "Cyber Security Enthusiast",
        "AI Specialist",
        "Problem Solver"
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing Effect Logic
    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const currentRole = roles[currentRoleIndex];

        const updatetype = setTimeout(() => {
            if (!isDeleting && currentText === currentRole) {
                // Pause at the end before deleting
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                const nextText = isDeleting
                    ? currentRole.substring(0, currentText.length - 1)
                    : currentRole.substring(0, currentText.length + 1);
                setCurrentText(nextText);
            }
        }, typingSpeed);

        return () => clearTimeout(updatetype);
    }, [currentText, isDeleting, currentRoleIndex, roles]);

    return (
        <section id="home" className="hero-section">
            {/* Background Grid Overlay */}
            <div className="hero-background">
                <div className="grid-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text-container">
                    <p className="greeting reveal active">Hello, World! I am</p>
                    <h1 className="hero-name reveal active" style={{ transitionDelay: '0.1s' }}>
                        Harshraj Singh <span className="text-gradient">Thakur</span>
                    </h1>

                    <h2 className="hero-role reveal active" style={{ transitionDelay: '0.2s' }}>
                        I am a <span className="typing-text">{currentText}</span><span className="cursor">|</span>
                    </h2>

                    <p className="hero-description reveal active" style={{ transitionDelay: '0.3s' }}>
                        A passionate Computer Science undergraduate specializing in building secure, scalable applications and exploring AI-driven solutions.
                    </p>

                    <div className="hero-cta reveal active" style={{ transitionDelay: '0.4s' }}>
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>

                <div className="hero-image-container reveal active" style={{ transitionDelay: '0.5s' }}>
                    <div className="image-wrapper">
                        <img src="/profile.jpg" alt="Harshraj Singh Thakur" className="hero-image" onError={(e) => { e.target.src = "https://github.com/TheHarshrajThakur.png"; }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
