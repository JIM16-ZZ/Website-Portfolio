import React from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'flex w-full rounded-xl border px-4 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

