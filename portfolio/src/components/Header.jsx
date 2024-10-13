import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { en: 'About', ja: '自己紹介', id: 'about' },
        { en: 'Skills', ja: 'スキル', id: 'skills' },
        { en: 'Projects', ja: 'プロジェクト', id: 'projects' },
        { en: 'Contact', ja: 'お問い合わせ', id: 'contact' },
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="py-4 sticky top-0 bg-gray-900 z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        eternal-TAKENOKO<span className="text-blue-400">.engineer</span>
                    </h1>
                    
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4 lg:space-x-6">
                            {navItems.map(({ en, id }) => (
                                <li key={id}>
                                    <button 
                                        onClick={() => scrollToSection(id)}
                                        className="cursor-pointer transition duration-300 text-sm lg:text-base hover:text-blue-400"
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
            </div>

            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-gray-800 shadow-lg">
                    <div className="container mx-auto px-4 py-2">
                        <ul className="space-y-2">
                            {navItems.map(({ ja, id }) => (
                                <li key={id}>
                                    <button 
                                        onClick={() => scrollToSection(id)}
                                        className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-300"
                                    >
                                        {ja}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;