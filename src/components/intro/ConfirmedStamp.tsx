"use client";

interface ConfirmedStampProps {
  visible: boolean;
}

export function ConfirmedStamp({ visible }: ConfirmedStampProps) {
  if (!visible) return null;

  return (
    <div className="fm-stampwrap">
      <div className="fm-stamp">Confirmed</div>
    </div>
  );
}
