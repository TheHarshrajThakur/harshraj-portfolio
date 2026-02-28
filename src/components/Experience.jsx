import React from 'react';
import './Experience.css';

const Experience = () => {
    const timelineData = [
        {
            year: "2023 - 2027",
            title: "B.Tech in Computer Science",
            subtitle: "Malwa Institute of Technology",
            description: "Pursuing Bachelor's degree with a focus on Full Stack Development, Cyber Security, and AI.",
            type: "education"
        },
        {
            year: "2019 - 2023",
            title: "High School (10+2 PCM)",
            subtitle: "School For Excellence",
            description: "Completed secondary education with specialization in Physics, Chemistry, and Mathematics.",
            type: "education"
        }
        // Add work experience / hackathons here later
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="heading-secondary reveal active">Education & <span className="text-gradient">Experience</span></h2>

                <div className="timeline">
                    {timelineData.map((item, idx) => (
                        <div key={idx} className={`timeline-item reveal active ${idx % 2 === 0 ? 'left' : 'right'}`} style={{ transitionDelay: `${idx * 0.2}s` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
