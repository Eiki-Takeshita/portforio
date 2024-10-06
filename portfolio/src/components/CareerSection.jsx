import React from 'react';

const CareerItem = ({ period, position, company, description }) => (
    <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{position}</h3>
        <span className="text-gray-400">{period}</span>
        </div>
        <h4 className="text-lg text-blue-400 mb-2">{company}</h4>
        <p className="text-gray-400">{description}</p>
    </div>
    );

    const CareerSection = () => {
    const careerHistory = [
        {
        period: "2019年9月 - 現在",
        position: "FAエンジニア",
        company: "株式会社竹下電設",
        description: "工場向けの自動化システムの設計と実装を担当。PLCプログラミングとPythonを用いたデータ分析が主な業務。"
        },
        // 他の経歴を追加
    ];

    return (
        <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Career History</h2>
        {careerHistory.map((item, index) => (
            <CareerItem key={index} {...item} />
        ))}
        </section>
    );
    };

export default CareerSection;