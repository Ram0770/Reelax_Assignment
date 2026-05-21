import { ChevronDown } from 'lucide-react';

export default function SelectField({ label, id, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-ink-700">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange(id, event.target.value)}
          className="focus-ring h-12 w-full appearance-none rounded-md border border-ink-200 bg-ink-50 px-4 pr-11 text-sm font-medium text-ink-900 transition-all duration-200 hover:border-ink-300 focus:border-brand-500 focus:bg-white"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500"
        />
      </div>
    </div>
  );
}
