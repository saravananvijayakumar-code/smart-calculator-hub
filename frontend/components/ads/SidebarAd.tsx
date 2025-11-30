import { AdsterraSlot } from './AdsterraSlot';
import { AdsettraSlot } from './AdsettraSlot';

interface SidebarAdProps {
  className?: string;
}

export function SidebarAd({ className = '' }: SidebarAdProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <AdsterraSlot position="top" />
      <AdsettraSlot position="top" />
    </div>
  );
}

export default SidebarAd;
