import React, { useEffect, useRef, useState } from 'react';
import { SiPython, SiReact, SiHtml5, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiKalilinux, SiSecurityscorecard, SiWireshark, SiCplusplus } from 'react-icons/si';
import { VscTerminalLinux } from 'react-icons/vsc';
import './Skills.css';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            title: "Full Stack Development",
            skills: [
                { name: "MongoDB", level: 80, icon: <SiMongodb color="#47A248" /> },
                { name: "Express.js", level: 75, icon: <SiExpress color="var(--text-primary)" /> },
                { name: "React", level: 85, icon: <SiReact color="#61DAFB" /> },
                { name: "Node.js", level: 80, icon: <SiNodedotjs color="#339933" /> },
                { name: "JavaScript", level: 90, icon: <SiJavascript color="#F7DF1E" /> },
                { name: "HTML5 / CSS3", level: 95, icon: <SiHtml5 color="#E34F26" /> }
            ]
        },
        {
            title: "Cyber Security & Core",
            skills: [
                { name: "Kali Linux", level: 85, icon: <SiKalilinux color="#557C94" /> },
                { name: "Network Security", level: 80, icon: <SiWireshark color="#1679A7" /> },
                { name: "Threat Detection", level: 75, icon: <SiSecurityscorecard color="#F44336" /> },
                { name: "Python", level: 85, icon: <SiPython color="#3776AB" /> },
                { name: "C++ / DSA", level: 80, icon: <SiCplusplus color="#00599C" /> },
                { name: "Bash Scripting", level: 85, icon: <VscTerminalLinux color="#FCC624" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section" ref={sectionRef}>
            <div className="container">
                <h2 className="heading-secondary reveal active">Technical <span className="text-gradient">Skills</span></h2>

                <div className="skills-container">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category glass-card reveal active" style={{ transitionDelay: `${idx * 0.2}s` }}>
                            <h3 className="category-title">{category.title}</h3>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="skill-item">
                                        <div className="skill-icon">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
