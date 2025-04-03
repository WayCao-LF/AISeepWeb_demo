import React, { useEffect, useRef } from 'react';

interface IconsBackgroundProps {
  className?: string;
}

const IconsBackground: React.FC<IconsBackgroundProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const icons = [
      { id: 'jira', path: 'M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h1.905v1.998L11.572 13.5V11.5l-.001.013z M5.232 1.995a5.218 5.218 0 0 0-5.232 5.215h11.571V5.198L7.137 0v1.998l-1.905-.003z M7.137 7.21H18.71a5.218 5.218 0 0 0-5.232-5.215h-1.905V0L7.137 5.215V7.21z M13.478 18.71a5.218 5.218 0 0 0 5.232-5.215H7.137v2.012l4.436 5.198v-1.998l1.905.003z', fill: '#2684FF' },
      { id: 'slack', path: 'M6.5 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10-10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-15.5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm3.5 13.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0-17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', fill: '#E01E5A' },
      { id: 'github', path: 'M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0 0 10 0z', fill: '#181717' },
      { id: 'gitlab', path: 'M10 19.84l3.7-11.39H6.3L10 19.84z M4.92 8.45H.25l3.58 11.01a.8.8 0 0 0 1.09.39L10 15.58 4.92 8.45z M.25 8.45c-.22.67.02 1.4.6 1.87l9.15 6.66-3.58-11.01L.25 8.45z M19.75 8.45h-4.67L10 19.84l5.08-4.26a.8.8 0 0 0 .29-.32l4.38-6.81z M19.75 8.45c.22.67-.02 1.4-.6 1.87l-9.15 6.66 3.58-11.01 6.17 2.48z', fill: '#FC6D26' },
      { id: 'figma', path: 'M8.33 20c1.84 0 3.33-1.5 3.33-3.33v-3.34H8.33a3.33 3.33 0 0 0 0 6.67zm0-16.67H5a3.33 3.33 0 0 0 0 6.67h3.33V3.33zm0 6.67H5a3.33 3.33 0 0 0 0 6.67h3.33V10zm0 0h3.33a3.33 3.33 0 1 0 0-6.67H8.33V10zm6.67-6.67a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67z', fill: '#F24E1E' },
    ];

    if (svgRef.current) {
      const svg = svgRef.current;
      const width = svg.clientWidth;
      const height = svg.clientHeight;
      
      // 清除现有元素
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
      
      // 创建动画元素
      icons.forEach((icon) => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        iconPath.setAttribute('d', icon.path);
        iconPath.setAttribute('fill', icon.fill);
        
        g.appendChild(iconPath);
        svg.appendChild(g);
        
        // 随机位置和大小
        const size = 20 + Math.random() * 30;
        const x = Math.random() * width;
        const y = Math.random() * height;
        
        // 设置动画
        const duration = 20 + Math.random() * 40;
        const delay = Math.random() * 10;
        const rotation = Math.random() * 360;
        
        g.style.transformOrigin = 'center';
        g.style.transform = `translate(${x}px, ${y}px) scale(${size / 20}) rotate(${rotation}deg)`;
        
        // 创建动画
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
        animate.setAttribute('dur', `${duration}s`);
        animate.setAttribute('repeatCount', 'indefinite');
        animate.setAttribute('begin', `${delay}s`);
        
        // 创建随机路径
        const pathRadius = Math.min(width, height) * 0.3;
        const motionPath = `M0,0 a${pathRadius},${pathRadius} 0 1,1 ${pathRadius * 2},0 a${pathRadius},${pathRadius} 0 1,1 -${pathRadius * 2},0`;
        
        animate.setAttribute('path', motionPath);
        g.appendChild(animate);
        
        // 添加旋转动画
        const animateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'rotate');
        animateTransform.setAttribute('from', '0');
        animateTransform.setAttribute('to', '360');
        animateTransform.setAttribute('dur', `${duration * 0.5}s`);
        animateTransform.setAttribute('repeatCount', 'indefinite');
        g.appendChild(animateTransform);
      });
    }
  }, []);

  return (
    <svg 
      ref={svgRef} 
      className={`w-full h-full absolute inset-0 ${className}`}
      viewBox="0 0 100% 100%"
      preserveAspectRatio="xMidYMid meet"
    />
  );
};

export default IconsBackground;
