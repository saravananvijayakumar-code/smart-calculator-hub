import { useEffect, useRef } from 'react';

interface AdsettraSlotProps {
  className?: string;
  position?: 'top' | 'middle' | 'bottom';
  adCode?: string;
}

export function AdsettraSlot({
  className = '',
  position = 'top',
  adCode = '//example.adsettra.com/ad.js'
}: AdsettraSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = adCode;

    script.onerror = () => {
      console.debug('Adsettra script failed to load');
    };

    containerRef.current.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      scriptLoadedRef.current = false;
    };
  }, [adCode]);

  return (
    <div className={`my-4 ${className}`}>
      <div className="text-xs text-center text-muted-foreground mb-2">Advertisement</div>
      <div ref={containerRef}>
        <div id={`adsettra-container-${position}`}></div>
      </div>
    </div>
  );
}