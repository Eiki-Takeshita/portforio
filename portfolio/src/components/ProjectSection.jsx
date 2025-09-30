import React from 'react';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ title, description, technologies, outcomes }) => (
    <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">使用技術:</h4>
            <ul className="list-disc list-inside text-gray-400">
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
        <div>
            <h4 className="text-lg font-semibold mb-2">成果:</h4>
            <ul className="list-disc list-inside text-gray-400">
                {outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                ))}
            </ul>
        </div>
    </div>
);

const ProjectSection = () => {
    return (
        <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;