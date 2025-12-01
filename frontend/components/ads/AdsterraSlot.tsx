import { useEffect, useRef, useState } from 'react';

interface AdsterraSlotProps {
  className?: string;
  position?: 'top' | 'middle' | 'bottom';
}

export function AdsterraSlot({ className = '', position = 'top' }: AdsterraSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl27997161.effectivegatecpm.com/120740d0fd4434c9ec79708b1058347a/invoke.js';
    
    script.onload = () => {
      // Check if ad content was injected after a short delay
      setTimeout(() => {
        const adContainer = containerRef.current?.querySelector('#container-120740d0fd4434c9ec79708b1058347a');
        if (adContainer && adContainer.children.length > 0) {
          setAdLoaded(true);
        }
      }, 1000);
    };
    
    script.onerror = () => {
      console.debug('Adsterra script failed to load');
      setAdLoaded(false);
    };

    containerRef.current.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      scriptLoadedRef.current = false;
    };
  }, []);

  // Don't render anything if we're in development or ads are blocked
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return null;
  }

  return (
    <div className={`my-4 ${className}`}>
      {adLoaded && (
        <div className="text-xs text-center text-muted-foreground mb-2">Advertisement</div>
      )}
      <div ref={containerRef}>
        <div id="container-120740d0fd4434c9ec79708b1058347a"></div>
      </div>
    </div>
  );
}
