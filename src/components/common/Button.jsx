const variants = {
  primary:
    'bg-brand-500 text-white shadow-button hover:bg-brand-600 hover:-translate-y-px active:translate-y-0',
  secondary:
    'border border-ink-200 bg-white text-ink-700 hover:border-ink-300 hover:bg-ink-50 active:bg-ink-100',
  upgrade:
    'bg-accent-500 text-white shadow-soft hover:bg-accent-600 hover:-translate-y-px active:translate-y-0',
  ghost: 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
};

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={[
        'focus-ring inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
