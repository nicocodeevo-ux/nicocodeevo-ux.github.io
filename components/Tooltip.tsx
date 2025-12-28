import React, { useState } from 'react';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top', className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionStyles = {
        top: { bottom: '100%', left: '50%', x: '-50%', y: -10 },
        bottom: { top: '100%', left: '50%', x: '-50%', y: 10 },
        left: { right: '100%', top: '50%', y: '-50%', x: -10 },
        right: { left: '100%', top: '50%', y: '-50%', x: 10 },
    };

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div
                    className="absolute z-50 px-3 py-1.5 whitespace-nowrap rounded-lg backdrop-blur-md bg-black/80 border border-white/10 text-xs font-mono text-[#ff7a22] shadow-[0_4px_20px_rgba(0,0,0,0.5)] pointer-events-none"
                    style={{
                        position: 'absolute',
                        ...(position === 'top' ? { bottom: '100%', left: '50%', transform: 'translateX(-50%)' } : {}),
                        ...(position === 'bottom' ? { top: '100%', left: '50%', transform: 'translateX(-50%)' } : {}),
                        ...(position === 'left' ? { right: '100%', top: '50%', transform: 'translateY(-50%)' } : {}),
                        ...(position === 'right' ? { left: '100%', top: '50%', transform: 'translateY(-50%)' } : {}),
                    }}
                >
                    <div className="relative z-10">{content}</div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
