import React, { useState } from 'react'
import Header from './components/Header'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import CareerSection from './components/CareerSection'

function App() {
  // 連絡先ポップアップの表示状態を管理
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // 連絡先ポップアップを開く関数
  const openContactPopup = () => setIsContactPopupOpen(true);
  // 連絡先ポップアップを閉じる関数
  const closeContactPopup = () => setIsContactPopupOpen(false);

  return (
    // アプリケーションのメインコンテナ
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダーコンポーネント */}
        <Header onContactClick={openContactPopup} />
        <main className="py-8">
          {/* メインタイトルセクション */}
          <section className="mb-16 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Factory Automation Engineer</h2>
            <p className="text-lg sm:text-xl text-gray-400">PLCと最新のソフトウェアソリューションを橋渡しするエンジニア</p>
          </section>
          
          {/* スキルセクション */}
          <SkillsSection />

          {/* プロジェクトセクション */}
          <div id="projects" className="mb-16">
            <ProjectSection />
          </div>
        </main>
        {/* フッター */}
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