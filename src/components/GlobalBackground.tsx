import React from 'react';

const GlobalBackground: React.FC = () => {
  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Soft global gradient wash */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_0%,hsla(0,72%,51%,.06),transparent_60%),radial-gradient(900px_700px_at_90%_10%,hsla(0,68%,40%,.055),transparent_60%),radial-gradient(1000px_700px_at_50%_100%,hsla(0,72%,51%,.05),transparent_60%)]" />
      </div>

      {/* Ambient blobs (very subtle) */}
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[hsla(0,72%,51%,.15)] blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-[hsla(0,68%,40%,.15)] blur-3xl" />

      {/* Gentle diagonal light sweep across the whole page */}
      <div
        className="absolute inset-0 opacity-[0.03] animate-pan-slow"
        style={{
          backgroundImage: 'linear-gradient(120deg, transparent 0%, hsla(0,72%,51%,.18) 35%, transparent 65%)',
          backgroundSize: '200% 100%'
        }}
      />

      {/* Sparse particle field */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="dot" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(255,80,80)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="rgb(255,80,80)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 70 }).map((_, i) => (
            <circle
              key={i}
              cx={`${(i * 97) % 100}%`}
              cy={`${(i * 83) % 100}%`}
              r={Math.max(1, (i % 4) + 1)}
              fill="url(#dot)"
              className="animate-float"
              style={{ animationDuration: `${8 + (i % 6)}s`, animationDelay: `${i * 100}ms` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default GlobalBackground;

