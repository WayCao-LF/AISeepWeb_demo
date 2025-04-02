import React, { useEffect, useRef, useState } from 'react';

interface AIThemeBackgroundProps {
  className?: string;
}

const AIThemeBackground: React.FC<AIThemeBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 使用Pexels的AI主题图片作为主源，Unsplash作为备用
    const img = new Image();
    img.crossOrigin = "Anonymous";
    const sources = [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://source.unsplash.com/random/1920x1080/?ai,technology"
    ];
    
    let currentSource = 0;
    let animationId: number;
    
    const initParticles = () => {
      const particleCount = 100;
      const particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `rgba(100, 210, 255, ${Math.random() * 0.5 + 0.1})`
        });
      }
      return particles;
    };

    const animate = (particles: any[], img: HTMLImageElement) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // 添加遮罩效果
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(30, 10, 60, 0.6)');
      gradient.addColorStop(1, 'rgba(10, 30, 80, 0.6)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 更新和绘制粒子
      particles.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      
      animationId = requestAnimationFrame(() => animate(particles, img));
    };

    const tryLoadImage = () => {
      img.src = sources[currentSource];
    };

    img.onload = () => {
      console.log('Background image loaded:', img.src);
      imageRef.current = img;
      setImageLoaded(true);
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      const particles = initParticles();
      animate(particles, img);
    };

    img.onerror = () => {
      console.error('Failed to load image:', sources[currentSource]);
      currentSource++;
      if (currentSource < sources.length) {
        tryLoadImage();
      } else {
        console.error('All image sources failed');
        // 使用纯色背景
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1a0033');
        gradient.addColorStop(1, '#003366');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setImageLoaded(true);
      }
    };

    tryLoadImage();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className={`w-full h-full absolute top-0 left-0 ${className}`}
    />
  );
};

export default AIThemeBackground;
