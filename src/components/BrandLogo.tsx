import React from 'react';

export default function BrandLogo({ className = "", scale = 1 }) {
  return (
    <div 
      className={`relative flex-shrink-0 select-none ${className}`} 
      style={{ 
        width: `${90 * scale}px`,
        height: `${120 * scale}px`
      }}
    >
      <div 
        className="bg-[#FFAB00] border-[4px] border-[#111111] flex flex-col items-center justify-center absolute top-0 left-0"
        style={{
          width: '90px',
          height: '120px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left'
        }}
      >
        <span className="font-urdu text-[#111111] text-[23px] font-bold leading-none -mb-1 mt-1">ایک</span>
        <span className="font-urdu text-[#111111] text-[23px] font-bold leading-[0.8]">قدم</span>
      </div>
    </div>
  );
}
