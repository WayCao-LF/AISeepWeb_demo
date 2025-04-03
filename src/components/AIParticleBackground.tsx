import React, { useEffect, useRef } from 'react';

const AIParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const aiKeywords = ['AI', 'Neural', 'Network', 'Deep', 'Learning', 'Algorithm', 'Tensor', 'Model', 'Data', 'Training'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置canvas尺寸
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 代码雨列配置
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0);

    // 随机生成0或1
    const getBinary = () => Math.random() > 0.5 ? '1' : '0';

    // 随机生成AI关键词
    const getKeyword = () => {
      return aiKeywords[Math.floor(Math.random() * aiKeywords.length)];
    };

    // 绘制代码雨
    const draw = () => {
      // 半透明黑色背景创造拖尾效果
      ctx.fillStyle = 'rgba(0, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 设置文字样式
      ctx.fillStyle = '#00ff41'; // 矩阵绿
      ctx.font = `${fontSize}px monospace`;

      // 绘制每列代码
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // 随机显示二进制或AI关键词
        const text = Math.random() > 0.9 ? getKeyword() : getBinary();

        ctx.fillText(text, x, y);

        // 重置到达底部的列
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // 随机添加蓝色代码
        if (Math.random() > 0.98) {
          ctx.save();
          ctx.fillStyle = '#0088ff';
          ctx.fillText(getBinary(), x, y - fontSize);
          ctx.restore();
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30fps

    // 窗口大小调整
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AIParticleBackground;
