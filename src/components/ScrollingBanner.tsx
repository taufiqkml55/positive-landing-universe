
import React, { useRef, useEffect } from 'react';

interface ScrollingBannerProps {
  items: { id: number; name: string }[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  items,
  direction = 'left',
  speed = 40,
  className = '',
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    
    // Set animation properties directly via CSS
    scrollerRef.current.setAttribute(
      'style',
      `--animation-direction: ${direction === 'left' ? 'forwards' : 'backwards'};
       --animation-duration: ${100 / speed}s;`
    );
  }, [direction, speed]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div 
        ref={scrollerRef}
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animationDirection: 'var(--animation-direction)',
          animationDuration: 'var(--animation-duration)',
        }}
      >
        {/* First copy of items */}
        {items.map((item) => (
          <div 
            key={`a-${item.id}`} 
            className="mx-8 text-xl md:text-2xl font-bold text-white hover:opacity-100 hover:text-positivus-green transition-all duration-300 whitespace-nowrap"
          >
            {item.name}
          </div>
        ))}
        
        {/* Duplicate set of items to create the seamless loop */}
        {items.map((item) => (
          <div 
            key={`b-${item.id}`} 
            className="mx-8 text-xl md:text-2xl font-bold text-white hover:opacity-100 hover:text-positivus-green transition-all duration-300 whitespace-nowrap"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
