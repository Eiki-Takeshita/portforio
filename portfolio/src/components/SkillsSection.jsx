import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skillsData';

const SkillsSection = () => {
    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillsData.map((skill, index) => (
                    <div key={index} className="h-auto">
                        <SkillCard {...skill} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;