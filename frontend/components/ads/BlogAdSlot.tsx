import { AdsterraSlot } from './AdsterraSlot';
import { AdsettraSlot } from './AdsettraSlot';

interface BlogAdSlotProps {
  position?: 'top' | 'middle' | 'bottom';
  className?: string;
}

export function BlogAdSlot({
  position = 'top',
  className = ''
}: BlogAdSlotProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <AdsterraSlot position={position} />
      <AdsettraSlot position={position} />
    </div>
  );
}

export function InContentAd() {
  return (
    <div className="space-y-4">
      <AdsterraSlot position="middle" className="my-8" />
      <AdsettraSlot position="middle" className="my-8" />
    </div>
  );
}

export function SidebarBlogAd() {
  return (
    <div className="space-y-4">
      <AdsterraSlot position="top" className="sticky top-4" />
      <AdsettraSlot position="top" className="sticky top-4" />
    </div>
  );
}
