import React from 'react';
import { HiDownload } from 'react-icons/hi';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="heading-secondary reveal active">About <span className="text-gradient">Me</span></h2>

                <div className="about-content">
                    <div className="about-text glass-card reveal active">
                        <h3 className="about-subtitle">Dedicated to Excellence</h3>
                        <p>
                            I am a Computer Science undergraduate specializing in Full Stack Development and Cyber Security.
                            My journey in tech is driven by a deep-seated passion for creating high-quality, secure solutions
                            that solve real-world problems.
                        </p>
                        <p>
                            I thrive on consistent effort, long focused working hours, and technical excellence. Whether I'm
                            customizing systems, exploring new gadgets, or delving into AI-driven solutions, my curiosity
                            keeps me motivated to continuously learn and adapt.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight">
                                <span className="highlight-number">5+</span>
                                <span className="highlight-text">Focus Hours/Day</span>
                            </div>
                            <div className="highlight">
                                <span className="highlight-number">10+</span>
                                <span className="highlight-text">Projects Built</span>
                            </div>
                            <div className="highlight">
                                <span className="highlight-number">100%</span>
                                <span className="highlight-text">Commitment</span>
                            </div>
                        </div>

                        <div className="about-cta">
                            <a href="/resume.pdf" download="Harshraj_Singh_Thakur_Resume.pdf" className="btn btn-primary">
                                <HiDownload size={20} /> Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="about-visual reveal active" style={{ transitionDelay: '0.2s' }}>
                        <div className="visual-container glass">
                            {/* Abstract visual representation of working environment */}
                            <div className="code-block">
                                <span className="code-line"><span style={{ color: '#ff0055' }}>const</span> developer = {'{'}</span>
                                <span className="code-line indent">name: <span style={{ color: '#00f0ff' }}>'Harshraj'</span>,</span>
                                <span className="code-line indent">passion: [<span style={{ color: '#00f0ff' }}>'Security'</span>, <span style={{ color: '#00f0ff' }}>'AI'</span>, <span style={{ color: '#00f0ff' }}>'Web'</span>],</span>
                                <span className="code-line indent">coffeeStatus: <span style={{ color: '#7000ff' }}>true</span>,</span>
                                <span className="code-line indent">isWorking: <span style={{ color: '#7000ff' }}>true</span></span>
                                <span className="code-line">{'}'};</span>
                            </div>
                            <div className="glow-effect"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
