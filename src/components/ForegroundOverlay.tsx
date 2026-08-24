import React from 'react';

const ForegroundOverlay: React.FC = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10"
    >
      {/* Soft light gradient wash over content */}
      <div className="absolute inset-0 opacity-35 mix-blend-soft-light">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_700px_at_20%_15%,hsl(var(--primary)/.12),transparent_60%),radial-gradient(1000px_700px_at_80%_10%,hsl(var(--accent)/.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/20" />
      </div>

      {/* Ultra subtle diagonal sheen */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(120deg, transparent 0%, hsla(0,72%,51%,.32) 35%, transparent 65%)',
          backgroundSize: '200% 100%'
        }}
      />
    </div>
  );
};

export default ForegroundOverlay;

