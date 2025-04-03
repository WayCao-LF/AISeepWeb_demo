import React, { useEffect, useRef } from 'react';

const NeuronPulseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置canvas尺寸
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 神经元节点配置
    class Neuron {
      x: number;
      y: number;
      size: number;
      connections: {neuron: Neuron, length: number}[];
      pulses: {progress: number, speed: number}[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 4;
        this.connections = [];
        this.pulses = [];
      }

      addConnection(neuron: Neuron) {
        const dx = this.x - neuron.x;
        const dy = this.y - neuron.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        this.connections.push({neuron, length});
      }

      addPulse() {
        if (Math.random() > 0.98) {
          this.pulses.push({
            progress: 0,
            speed: Math.random() * 0.01 + 0.005
          });
        }
      }

      update() {
        // 随机添加新脉冲
        this.addPulse();

        // 更新现有脉冲
        this.pulses = this.pulses.filter(pulse => {
          pulse.progress += pulse.speed;
          return pulse.progress <= 1;
        });
      }

      draw() {
        // 绘制神经元节点
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, 'rgba(150, 100, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(80, 50, 200, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // 绘制连接线
        this.connections.forEach(connection => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(connection.neuron.x, connection.neuron.y);
          ctx.strokeStyle = 'rgba(150, 100, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        // 绘制脉冲
        this.pulses.forEach(pulse => {
          this.connections.forEach(connection => {
            const currentProgress = Math.min(pulse.progress * 1.5, 1);
            const pulseX = this.x + (connection.neuron.x - this.x) * currentProgress;
            const pulseY = this.y + (connection.neuron.y - this.y) * currentProgress;

            const gradient = ctx.createRadialGradient(
              pulseX, pulseY, 0,
              pulseX, pulseY, 8
            );
            gradient.addColorStop(0, 'rgba(100, 200, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');

            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 6, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          });
        });
      }
    }

    // 创建神经元网络
    const neurons: Neuron[] = [];
    const neuronCount = 15;

    // 随机布置神经元
    for (let i = 0; i < neuronCount; i++) {
      neurons.push(new Neuron(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // 创建连接 (每个神经元连接2-3个其他神经元)
    neurons.forEach(neuron => {
      const connectionCount = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < connectionCount; i++) {
        const randomNeuron = neurons[Math.floor(Math.random() * neurons.length)];
        if (randomNeuron !== neuron) {
          neuron.addConnection(randomNeuron);
        }
      }
    });

    // 动画循环
    const animate = () => {
      // 半透明背景创造拖尾效果
      ctx.fillStyle = 'rgba(10, 5, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 更新和绘制神经元
      neurons.forEach(neuron => {
        neuron.update();
        neuron.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // 窗口大小调整
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
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

export default NeuronPulseBackground;
