import React from 'react';

const DecorativeGrid = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.4) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
    </div>
  );
};

export default DecorativeGrid;
