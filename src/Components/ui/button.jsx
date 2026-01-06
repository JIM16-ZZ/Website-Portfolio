import React from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const buttonVariants = {
  default: 'bg-slate-900 text-slate-50 hover:bg-slate-900/90',
  outline: 'border border-slate-700 bg-transparent hover:bg-slate-800',
  secondary: 'bg-slate-800 text-slate-50 hover:bg-slate-800/80',
  ghost: 'hover:bg-slate-800 hover:text-slate-50',
  link: 'text-slate-400 underline-offset-4 hover:underline',
};

export function Button({ className, variant = 'default', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

