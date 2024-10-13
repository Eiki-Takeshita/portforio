import React, { useState } from 'react';

const Header = ({ onContactClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { en: 'Projects', ja: 'プロジェクト', id: 'projects' },
        { en: 'Skills', ja: 'スキル', id: 'skills' },
        { en: 'Career', ja: '経歴', id: 'career' },
        { en: 'Contact', ja: 'お問い合わせ', id: 'contact' },
    ];

    return (
        <header className="py-6">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">Eiki Takeshita<span className="text-blue-400">.engineer</span></h1>
            
            <nav className="hidden md:block">
            <ul className="flex space-x-6">
                {navItems.map(({ en, id }) => (
                <li key={id}>
                    <button 
                    onClick={() => id === 'contact' ? onContactClick() : scrollToSection(id)}
                    className="hover:text-blue-400 cursor-pointer transition duration-300"
                    >
                    {en}
                    </button>
                </li>
                ))}
            </ul>
            </nav>

            <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            </div>
        </div>

        {isMenuOpen && (
            <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg md:hidden">
            <ul className="space-y-2">
                {navItems.map(({ ja, id }) => (
                <li key={id}>
                    <button 
                    onClick={() => id === 'contact' ? onContactClick() : scrollToSection(id)}
                    className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-300"
                    >
                    {ja}
                    </button>
                </li>
                ))}
            </ul>
            </div>
        )}
        </header>
    );
};

export default Header;