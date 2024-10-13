import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
                <div className="space-y-4">
                    <a href="mailto:eternaltakenoko@gmail.com" className="block text-blue-400 hover:underline break-all">
                        Email: eternaltakenoko@gmail.com
                    </a>
                    <a href="https://qiita.com/eternal_TAKENOKO" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                        Qiita
                    </a>
                    <a href="https://github.com/eternal-TAKENOKO" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;