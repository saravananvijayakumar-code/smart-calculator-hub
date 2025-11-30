import { AdsterraSlot } from './AdsterraSlot';
import { AdsettraSlot } from './AdsettraSlot';

interface NativeBannerProps {
  className?: string;
  position?: 'top' | 'middle' | 'bottom';
}

export function NativeBanner({ className = '', position = 'top' }: NativeBannerProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <AdsterraSlot position={position} />
      <AdsettraSlot position={position} />
    </div>
  );
}

export default NativeBanner;
