import React from 'react';

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
    const projects = [
        {
        title: "コンベア管理システム",
        description: "工場向けのコンベアシステムの設計と実装",
        technologies: ["PLC(keyence KV8000)", "Python"],
        outcomes: ["生産レーンの省人化", "生産性向上", "リアルタイムデータの可視化","障害対応の簡易化"]
        },
        {
        title: "RFID在庫管理システム",
        description: "RFIDを用いた自動在庫管理システムの開発",
        technologies: ["PLC", "RFID技術", "python", "flask" , "MySQL"],
        outcomes: ["正確な入出庫管理", "在庫のリアルタイム可視化", "PLCと連携したコンベアの自動化"]
        },
        // 他のプロジェクトを追加
    ];

    return (
        <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
        </div>
        </section>
    );
    };

export default ProjectSection;