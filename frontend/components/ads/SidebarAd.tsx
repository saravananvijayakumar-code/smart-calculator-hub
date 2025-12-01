import { AdsterraSlot } from './AdsterraSlot';

interface SidebarAdProps {
  className?: string;
}

export function SidebarAd({ className = '' }: SidebarAdProps) {
  return (
    <div className={className}>
      <AdsterraSlot position="top" />
    </div>
  );
}

export default SidebarAd;
