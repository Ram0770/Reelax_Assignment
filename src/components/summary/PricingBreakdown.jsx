import { formatINR } from '../../utils/currency.js';

function Row({ label, value, muted = false, accent = false }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={muted ? 'text-sm text-ink-500' : 'text-sm font-semibold text-ink-700'}>
        {label}
      </span>
      <span
        className={[
          'text-sm font-bold',
          accent ? 'text-success-700' : muted ? 'text-ink-500' : 'text-ink-900',
        ].join(' ')}
      >
        {value}
      </span>
    </div>
  );
}

export default function PricingBreakdown({ subtotal, discount, walletApplied, tax, total }) {
  return (
    <section className="space-y-3">
      <Row label="Subtotal" value={formatINR(subtotal)} />
      <Row label="Coupon discount" value={`- ${formatINR(discount)}`} accent />
      <Row label="Wallet credit" value={`- ${formatINR(walletApplied)}`} accent />
      <Row label="GST (18%)" value={formatINR(tax)} muted />

      <div className="mt-4 border-t border-dashed border-ink-300 pt-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-ink-900">Total Amount</p>
            <p className="mt-1 text-xs text-ink-500">Billed today, taxes included</p>
          </div>
          <p className="text-2xl font-extrabold text-brand-600">{formatINR(total)}</p>
        </div>
      </div>
    </section>
  );
}
