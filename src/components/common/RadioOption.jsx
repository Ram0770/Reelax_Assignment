import { Check } from 'lucide-react';

export default function RadioOption({ id, name, title, description, meta, checked, onChange }) {
  return (
    <label
      htmlFor={id}
      className={[
        'flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200',
        checked
          ? 'border-brand-500 bg-brand-50 shadow-soft'
          : 'border-ink-200 bg-white hover:border-ink-300 hover:bg-ink-50',
      ].join(' ')}
    >
      <span
        className={[
          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200',
          checked ? 'border-brand-500 bg-brand-500 text-white' : 'border-ink-300 bg-white text-transparent',
        ].join(' ')}
      >
        <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-3">
          <span className="text-sm font-bold text-ink-900">{title}</span>
          {meta ? <span className="shrink-0 text-xs font-bold text-success-700">{meta}</span> : null}
        </span>
        <span className="mt-1 block text-xs leading-5 text-ink-500">{description}</span>
      </span>
    </label>
  );
}
