import { ChevronDown, TicketPercent } from 'lucide-react';
import Button from '../common/Button.jsx';
import RadioOption from '../common/RadioOption.jsx';
import { formatINR } from '../../utils/currency.js';

export default function CouponSection({
  coupons,
  expanded,
  onToggle,
  couponCode,
  onCouponCodeChange,
  selectedCoupon,
  onSelectCoupon,
}) {
  return (
    <section className="rounded-lg border border-ink-200">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg px-4 py-4 text-left transition-colors hover:bg-ink-50"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-50 text-accent-600">
            <TicketPercent className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-ink-900">Apply Coupon</span>
            <span className="block text-xs leading-5 text-ink-500">Choose a saved offer or enter a code</span>
          </span>
        </span>
        <ChevronDown
          className={[
            'h-4 w-4 shrink-0 text-ink-500 transition-transform duration-200',
            expanded ? 'rotate-180' : '',
          ].join(' ')}
        />
      </button>

      {expanded ? (
        <div className="space-y-4 border-t border-ink-200 px-4 pb-4 pt-4">
          <div className="flex gap-2">
            <input
              type="text"
              aria-label="Coupon code"
              value={couponCode}
              onChange={(event) => onCouponCodeChange(event.target.value.toUpperCase())}
              placeholder="Enter coupon"
              className="focus-ring h-11 min-w-0 flex-1 rounded-md border border-ink-200 bg-ink-50 px-3 text-sm font-bold uppercase tracking-wide text-ink-900 transition-all placeholder:normal-case placeholder:tracking-normal placeholder:text-ink-400 focus:border-brand-500 focus:bg-white"
            />
            <Button size="sm" variant="secondary" onClick={() => onSelectCoupon(coupons[0].id)}>
              Apply
            </Button>
          </div>

          <div className="space-y-3">
            {coupons.map((coupon) => (
              <RadioOption
                key={coupon.id}
                id={coupon.id}
                name="coupon"
                title={coupon.code}
                description={`${coupon.title}. ${coupon.description}.`}
                meta={`Save ${formatINR(coupon.value)}`}
                checked={selectedCoupon === coupon.id}
                onChange={() => onSelectCoupon(coupon.id)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
