import React from 'react'
import Header from './components/Header'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import IntroductionSection from './components/IntroductionSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="py-8">
          <section className="mb-16 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Factory Automation Engineer</h2>
            <p className="text-lg sm:text-xl text-gray-400">PLCと最新のソフトウェアソリューションを橋渡しするエンジニア</p>
          </section>

          <div className="space-y-24"> {/* Added spacing between sections */}
            <IntroductionSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
          </div>
        </main>
        <footer className="text-center py-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">&copy; 2024 eternal-TAKENOKO. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App