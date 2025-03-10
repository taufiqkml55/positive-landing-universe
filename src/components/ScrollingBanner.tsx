
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
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current || !contentRef.current) return;
    
    const banner = bannerRef.current;
    const content = contentRef.current;
    
    // Clone the content to create a seamless loop
    const clone = content.cloneNode(true) as HTMLDivElement;
    banner.appendChild(clone);
    
    let animationId: number;
    let position = 0;
    
    const animate = () => {
      // Reset position when we've scrolled the full width of the original content
      if (Math.abs(position) >= content.offsetWidth) {
        position = 0;
      }
      
      // Increment position based on direction and speed
      position -= direction === 'left' ? 0.5 * (speed / 40) : -0.5 * (speed / 40);
      
      // Apply the transform
      banner.style.transform = `translateX(${position}px)`;
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [direction, speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="inline-flex" ref={bannerRef}>
        <div className="inline-flex items-center" ref={contentRef}>
          {items.map((item) => (
            <div 
              key={item.id} 
              className="text-xl md:text-2xl font-bold text-white opacity-80 hover:opacity-100 hover:text-positivus-green transition-all duration-300 mx-8 whitespace-nowrap"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
