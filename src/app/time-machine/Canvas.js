import { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const ctxRef = useRef(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctxRef.current = canvas.getContext('2d');

    const render = () => {
      frameCountRef.current++;
      draw();
      requestIdRef.current = requestAnimationFrame(render);
    };

    const draw = () => {
      const ctx = ctxRef.current;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw your animation here
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(
        Math.sin(frameCountRef.current * 0.05) * canvas.width * 0.25 + canvas.width * 0.5,
        Math.cos(frameCountRef.current * 0.05) * canvas.height * 0.25 + canvas.height * 0.5,
        50,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    render();

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default CanvasComponent;