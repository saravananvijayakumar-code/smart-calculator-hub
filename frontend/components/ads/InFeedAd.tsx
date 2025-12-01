import { AdsterraSlot } from './AdsterraSlot';
import { AdsettraSlot } from './AdsettraSlot';

interface InFeedAdProps {
  className?: string;
}

export function InFeedAd({ className = '' }: InFeedAdProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <AdsterraSlot position="middle" />
      <AdsettraSlot position="middle" />
    </div>
  );
}

export default InFeedAd;
