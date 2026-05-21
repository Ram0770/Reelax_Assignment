export default function Card({ children, className = '', as: Component = 'section' }) {
  return (
    <Component
      className={[
        'rounded-xl border border-ink-200 bg-surface shadow-card',
        className,
      ].join(' ')}
    >
      {children}
    </Component>
  );
}
