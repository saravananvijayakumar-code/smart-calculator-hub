import { AdsterraSlot } from './AdsterraSlot';

interface NativeBannerProps {
  className?: string;
  position?: 'top' | 'middle' | 'bottom';
}

export function NativeBanner({ className = '', position = 'top' }: NativeBannerProps) {
  return (
    <div className={className}>
      <AdsterraSlot position={position} />
    </div>
  );
}

export default NativeBanner;
