import React, { useState } from 'react'
import { Monitor, Cpu, Database, Code } from 'lucide-react';
import Header from './components/Header'
import ProjectSection from './components/ProjectSection'
import DetailedSkillsSection from './components/DetailedSkillsSection'
import CareerSection from './components/CareerSection'

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const openContactPopup = () => setIsContactPopupOpen(true);
  const closeContactPopup = () => setIsContactPopupOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header onContactClick={openContactPopup} />
        <main className="py-8">
          {/* メインタイトルセクション */}
          <section className="mb-16 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Factory Automation Engineer</h2>
            <p className="text-lg sm:text-xl text-gray-400">PLCと最新のソフトウェアソリューションを橋渡しするエンジニア</p>
          </section>
          
          {/* スキル概要セクション */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Monitor, title: 'PLC Systems', description: 'プログラマブルロジックコントローラの設計と実装' },
              { icon: Cpu, title: 'RFID Integration', description: 'RFIDを用いた効率的な在庫管理システムの構築' },
              { icon: Database, title: 'Data Management', description: '工場データの収集、分析、可視化ソリューション' },
              { icon: Code, title: 'Python Development', description: 'Pythonを活用した自動化スクリプトと管理ツールの開発' },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                <Icon size={36} className="text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </section>

          <div id="projects" className="mb-16">
            <ProjectSection />
          </div>
          <div id="skills" className="mb-16">
            <DetailedSkillsSection />
          </div>
          <div id="career" className="mb-16">
            <CareerSection />
          </div>
        </main>
        <footer className="text-center py-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">&copy; 2024 Eiki Takeshita. All rights reserved.</p>
        </footer>
      </div>

      {/* 連絡先ポップアップ */}
      {isContactPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">連絡先</h2>
            <div className="space-y-4">
              <a href="mailto:example@email.com" className="block text-blue-400 hover:underline break-all">
                Email: example@email.com
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={closeContactPopup} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
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