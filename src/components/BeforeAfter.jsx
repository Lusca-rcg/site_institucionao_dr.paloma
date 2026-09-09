import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e) => { handleMove(e.touches[0].clientX); };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-olive/8 text-olive text-[11px] font-bold uppercase tracking-[0.15em] rounded-full mb-4">
            Resultados Reais
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite">
            Transformações que{' '}
            <span className="text-olive italic">inspiram</span>
          </h2>
          <p className="mt-4 text-graphite/60 max-w-2xl mx-auto text-base sm:text-lg">
            Arraste o slider e veja a diferença. Cada resultado é fruto de planejamento e dedicação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-graphite/10 cursor-ew-resize select-none border border-graphite/8"
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            onTouchStart={() => { isDragging.current = true; }}
          >
            {/* After Image (background) */}
            <img
              src="/images/smile-after.jpg"
              alt="Depois do tratamento"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before Image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/smile-before.jpg"
                alt="Antes do tratamento"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${containerRef.current?.offsetWidth || 600}px`, maxWidth: 'none' }}
                draggable={false}
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-olive">
                <GripVertical size={18} className="text-olive" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-graphite/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full z-20">
              Antes
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-olive/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full z-20">
              Depois
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
