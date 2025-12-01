import { AdsterraSlot } from './AdsterraSlot';

interface AdsettraSlotProps {
  className?: string;
  position?: 'top' | 'middle' | 'bottom';
  adCode?: string;
}

// AdsettraSlot now redirects to AdsterraSlot since we only use Adsterra
export function AdsettraSlot({
  className = '',
  position = 'top',
}: AdsettraSlotProps) {
  return <AdsterraSlot className={className} position={position} />;
}