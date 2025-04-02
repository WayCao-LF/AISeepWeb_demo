import React from 'react';

interface ConnectedIconsProps {
  className?: string;
}

const ConnectedIcons: React.FC<ConnectedIconsProps> = ({ className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <svg width="800" height="100" viewBox="0 0 800 100" className="max-w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2684FF" />
            <stop offset="25%" stopColor="#E01E5A" />
            <stop offset="50%" stopColor="#181717" />
            <stop offset="75%" stopColor="#FC6D26" />
            <stop offset="100%" stopColor="#F24E1E" />
          </linearGradient>
        </defs>
        
        {/* 连接线 */}
        <path 
          d="M100,50 L700,50" 
          stroke="url(#lineGradient)" 
          strokeWidth="4" 
          fill="none" 
        />
        
        {/* Jira 图标 */}
        <g transform="translate(50, 50) scale(1.5)">
          <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h1.905v1.998L11.572 13.5V11.5l-.001.013z M5.232 1.995a5.218 5.218 0 0 0-5.232 5.215h11.571V5.198L7.137 0v1.998l-1.905-.003z M7.137 7.21H18.71a5.218 5.218 0 0 0-5.232-5.215h-1.905V0L7.137 5.215V7.21z M13.478 18.71a5.218 5.218 0 0 0 5.232-5.215H7.137v2.012l4.436 5.198v-1.998l1.905.003z" fill="#2684FF" />
        </g>
        
        {/* Slack 图标 */}
        <g transform="translate(200, 50) scale(1.5)">
          <path d="M6.5 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10-10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-15.5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm3.5 13.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0-17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="#E01E5A" />
        </g>
        
        {/* GitHub 图标 */}
        <g transform="translate(350, 50) scale(1.5)">
          <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0 0 10 0z" fill="#181717" />
        </g>
        
        {/* GitLab 图标 */}
        <g transform="translate(500, 50) scale(1.5)">
          <path d="M10 19.84l3.7-11.39H6.3L10 19.84z M4.92 8.45H.25l3.58 11.01a.8.8 0 0 0 1.09.39L10 15.58 4.92 8.45z M.25 8.45c-.22.67.02 1.4.6 1.87l9.15 6.66-3.58-11.01L.25 8.45z M19.75 8.45h-4.67L10 19.84l5.08-4.26a.8.8 0 0 0 .29-.32l4.38-6.81z M19.75 8.45c.22.67-.02 1.4-.6 1.87l-9.15 6.66 3.58-11.01 6.17 2.48z" fill="#FC6D26" />
        </g>
        
        {/* Figma 图标 */}
        <g transform="translate(650, 50) scale(1.5)">
          <path d="M8.33 20c1.84 0 3.33-1.5 3.33-3.33v-3.34H8.33a3.33 3.33 0 0 0 0 6.67zm0-16.67H5a3.33 3.33 0 0 0 0 6.67h3.33V3.33zm0 6.67H5a3.33 3.33 0 0 0 0 6.67h3.33V10zm0 0h3.33a3.33 3.33 0 1 0 0-6.67H8.33V10zm6.67-6.67a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67z" fill="#F24E1E" />
        </g>
      </svg>
    </div>
  );
};

export default ConnectedIcons;
