import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isExpanded) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [isExpanded]);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden w-full h-auto">
            <button
                onClick={toggleExpand}
                aria-expanded={isExpanded}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <div className="flex items-center justify-between mb-2">
                    <Icon size={36} className="text-blue-400 flex-shrink-0" />
                    {isExpanded ? (
                        <ChevronUp size={24} className="text-blue-400 flex-shrink-0" />
                    ) : (
                        <ChevronDown size={24} className="text-blue-400 flex-shrink-0" />
                    )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
            </button>
            <div 
                ref={contentRef}
                style={{ maxHeight: `${contentHeight}px` }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <ul className="list-disc list-inside text-sm text-gray-400 p-6">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillCard;