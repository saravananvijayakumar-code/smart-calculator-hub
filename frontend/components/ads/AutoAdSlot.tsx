import { AdsterraSlot } from './AdsterraSlot';

interface AutoAdSlotProps {
  className?: string;
  position?: 'top' | 'middle' | 'bottom';
  placement?: string;
}

export function AutoAdSlot({ className = '', position = 'top', placement }: AutoAdSlotProps) {
  let finalPosition: 'top' | 'middle' | 'bottom' = position;

  if (placement) {
    if (placement.includes('top') || placement.includes('banner')) {
      finalPosition = 'top';
    } else if (placement.includes('mid') || placement.includes('feed') || placement.includes('article') || placement.includes('content')) {
      finalPosition = 'middle';
    } else if (placement.includes('bottom')) {
      finalPosition = 'bottom';
    }
  }

  return (
    <div className={className}>
      <AdsterraSlot position={finalPosition} />
    </div>
  );
}

export default AutoAdSlot;
