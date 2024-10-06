import React from 'react';

const SkillCategory = ({ category, skills }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">{category}</h3>
        <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{skill.name}</h4>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
                ></div>
            </div>
            </div>
        ))}
        </div>
    </div>
    );

    const DetailedSkillsSection = () => {
    const skillCategories = [
        {
        category: "プログラミング言語",
        skills: [
            { name: "Python", level: 60 },
            { name: "ST言語", level: 80 },
        ]
        },
        {
        category: "FAシステム",
        skills: [
            { name: "PLC プログラミング", level: 95 },
            { name: "コンベア制御", level: 80 },
            { name: "RFID技術", level: 50 },
            { name: "keyence PLC", level: 80 },
            { name: "OMRON PLC", level: 70 },
            { name: "Mitsubishi PLC", level: 70 },
        ]
        },
        {
        category: "インフラ",
        skills: [
            { name: "network", level: 70 },
            { name: "Docker", level: 30 },
        ]
        },
        // 他のカテゴリーを追加
    ];

    return (
        <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
        ))}
        </section>
    );
    };

export default DetailedSkillsSection;