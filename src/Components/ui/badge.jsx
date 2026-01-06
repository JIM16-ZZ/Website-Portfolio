import React from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const badgeVariants = {
  default: 'bg-slate-800 text-slate-200 border-slate-700',
  secondary: 'bg-slate-700/50 text-slate-300 border-slate-600',
  destructive: 'bg-red-500/10 text-red-400 border-red-500/20',
  outline: 'bg-transparent text-slate-300 border-slate-700',
};

export function Badge({ className, variant = 'default', children, ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

