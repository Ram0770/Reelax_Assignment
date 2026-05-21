export default function InputField({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder,
  autoComplete,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="focus-ring h-12 w-full rounded-md border border-ink-200 bg-ink-50 px-4 text-sm font-medium text-ink-900 transition-all duration-200 placeholder:text-ink-400 hover:border-ink-300 focus:border-brand-500 focus:bg-white"
      />
    </div>
  );
}
