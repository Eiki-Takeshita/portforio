import React from 'react';

const IntroductionSection = () => {
    return (
        <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
            <div classname="max-w-3xl ma-auto space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg">
                はじめまして、永遠にタケノコです。FAエンジニアとして工場の自動化に携わっています。
                </p>
                <p className="text-base sm:text-lg">
                PLCプログラミングとソフトウェア開発の両方のスキルを活かし、既存の設備を最新の技術でアップデートすることを目指しています。
                </p>
                <p className="text-base sm:text-lg">
                ラズパイやレンタルサーバーでアプリ開発やWebサイト制作をすることが趣味で、このポートフォリオもフロントエンドの勉強のために作成しました。
                </p>
            </div>
        </div>
        </section>
    );
};

export default IntroductionSection;