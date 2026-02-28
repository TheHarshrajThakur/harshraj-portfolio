import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const [githubProjects, setGithubProjects] = useState([]);
    const [filter, setFilter] = useState('All');

    // Custom Projects to highlight (mixing with GitHub data)
    const featuredProjects = [
        {
            id: "featured-1",
            name: "AI Threat Detection System",
            description: "A browser extension leveraging AI to detect and block phishing attempts and malicious URLs in real-time.",
            topics: ["Python", "Machine Learning", "JavaScript", "Extension API"],
            html_url: "#",
            homepage: "#",
            featured: true
        },
        {
            id: "featured-2",
            name: "Web Security Platform",
            description: "Comprehensive platform for vulnerability scanning and continuous monitoring of web applications.",
            topics: ["React", "Node.js", "Cyber Security", "MongoDB"],
            html_url: "#",
            homepage: "#",
            featured: true
        },
        {
            id: "featured-3",
            name: "Carbon Footprint Tracker",
            description: "Analytics dashboard helping individuals track and reduce their daily carbon footprint with actionable insights.",
            topics: ["React", "Data Visualization", "API Integration"],
            html_url: "#",
            homepage: "#",
            featured: true
        }
    ];

    // Fetch GitHub Repositories (Optional Enhancement)
    useEffect(() => {
        // Replace 'yourusername' with actual github username if known. 
        // Using a placeholder fetch strategy that degrades gracefully.
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/harshraj/repos?sort=updated&per_page=4');
                if (response.ok) {
                    const data = await response.json();
                    setGithubProjects(data);
                }
            } catch (error) {
                console.error("Error fetching repos:", error);
            }
        };
        fetchRepos();
    }, []);

    const allProjects = [...featuredProjects, ...githubProjects.filter(r => !r.fork)];

    const filters = ['All', 'React', 'Python', 'Cyber Security', 'Machine Learning'];

    const filteredProjects = filter === 'All'
        ? allProjects
        : allProjects.filter(p => p.topics?.some(topic => topic.toLowerCase() === filter.toLowerCase()));

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="heading-secondary reveal active">Featured <span className="text-gradient">Projects</span></h2>

                {/* Filter Buttons */}
                <div className="project-filters reveal active">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="project-card glass-card reveal active"
                            style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <div className="folder-icon">📁</div>
                                    <div className="project-links">
                                        {project.html_url && project.html_url !== "#" && (
                                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                <FiGithub size={20} />
                                            </a>
                                        )}
                                        {project.homepage && project.homepage !== "#" && (
                                            <a href={project.homepage} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                                <FiExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="project-title">{project.name.replace(/-/g, ' ')}</h3>
                                <p className="project-description">
                                    {project.description || "A project focused on software engineering and development."}
                                </p>

                                <div className="project-tech">
                                    {project.topics && project.topics.slice(0, 4).map(topic => (
                                        <span key={topic} className="tech-tag">{topic}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-more">
                    <a href="https://github.com/TheHarshrajThakur" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        View All on GitHub <FiGithub style={{ marginLeft: '8px' }} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
