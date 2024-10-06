import React, { useState } from 'react'
import { Monitor, Cpu, Database, Code } from 'lucide-react';
import Header from './components/Header'
import ProjectSection from './components/ProjectSection'
import DetailedSkillsSection from './components/DetailedSkillsSection'
import CareerSection from './components/CareerSection'

function App() {
  // 連絡先ポップアップの表示状態を管理するstate
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // 連絡先ポップアップを開く関数
  const openContactPopup = () => setIsContactPopupOpen(true);
  // 連絡先ポップアップを閉じる関数
  const closeContactPopup = () => setIsContactPopupOpen(false);

  return (
    <div className="container mx-auto px-4">
      {/* ヘッダーコンポーネント。連絡先ポップアップを開く関数を渡す */}
      <Header onContactClick={openContactPopup} />
      <main>
        {/* メインタイトルセクション */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Factory Automation Engineer</h2>
          <p className="text-xl text-gray-400">PLCと最新のソフトウェアソリューションを橋渡しするエンジニア</p>
        </section>
        
        {/* スキル概要セクション */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* スキルアイテムの配列をマップして表示 */}
          {[
            { icon: Monitor, title: 'PLC Systems', description: 'プログラマブルロジックコントローラの設計と実装' },
            { icon: Cpu, title: 'RFID Integration', description: 'RFIDを用いた効率的な在庫管理システムの構築' },
            { icon: Database, title: 'Data Management', description: '工場データの収集、分析、可視化ソリューション' },
            { icon: Code, title: 'Python Development', description: 'Pythonを活用した自動化スクリプトと管理ツールの開発' },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <Icon size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-center text-gray-400">{description}</p>
            </div>
          ))}
        </section>

        {/* プロジェクトセクション */}
        <div id="projects">
          <ProjectSection />
        </div>
        {/* スキル詳細セクション */}
        <div id="skills">
          <DetailedSkillsSection />
        </div>
        {/* 経歴セクション */}
        <div id="career">
          <CareerSection />
        </div>
      </main>
      {/* フッター */}
      <footer className="text-center py-8 mt-16 border-t border-gray-800">
        <p className="text-gray-400">&copy; 2024 Eiki Takeshita. All rights reserved.</p>
      </footer>

      {/* 連絡先ポップアップ */}
      {isContactPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">連絡先</h2>
            <div className="space-y-4">
              <a href="mailto:eternaltakenoko@gmail.com" className="block text-blue-400 hover:underline">
                Email: eternaltakenoko@gmail.com
              </a>
              <a href="https://qiita.com/eternal_TAKENOKO" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                Qiita
              </a>
              <a href="https://github.com/eternal-TAKENOKO" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                GitHub
              </a>
              {/* 他の連絡先リンクを追加 */}
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={closeContactPopup} className="px-4 py-2 bg-gray-600 text-white rounded-md">
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App