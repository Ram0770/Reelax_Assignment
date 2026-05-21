import { WalletCards } from 'lucide-react';
import { formatINR } from '../../utils/currency.js';

export default function WalletCard({ balance, applied, enabled, onToggle }) {
  return (
    <section className="rounded-lg border border-ink-200 bg-ink-50 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-brand-600 shadow-soft">
            <WalletCards className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-ink-900">Wallet Balance</h3>
            <p className="mt-1 text-xs leading-5 text-ink-500">
              {formatINR(balance)} available for this workspace
            </p>
          </div>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={onToggle}
          className={[
            'focus-ring relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200',
            enabled ? 'bg-brand-500' : 'bg-ink-300',
          ].join(' ')}
        >
          <span
            className={[
              'absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200',
              enabled ? 'translate-x-6' : 'translate-x-1',
            ].join(' ')}
          />
        </button>
      </div>
      {enabled ? (
        <p className="mt-3 rounded-md bg-white px-3 py-2 text-xs font-bold text-success-700">
          {formatINR(applied)} wallet credit will be applied.
        </p>
      ) : null}
    </section>
  );
}
