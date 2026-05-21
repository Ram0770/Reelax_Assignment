import { ArrowUpRight, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import CouponSection from './CouponSection.jsx';
import PricingBreakdown from './PricingBreakdown.jsx';
import WalletCard from './WalletCard.jsx';
import { coupons, plan, wallet } from '../../constants/pricing.js';
import { formatINR } from '../../utils/currency.js';

export default function OrderSummary() {
  const [couponExpanded, setCouponExpanded] = useState(true);
  const [couponCode, setCouponCode] = useState('WELCOME20');
  const [selectedCoupon, setSelectedCoupon] = useState(coupons[0].id);
  const [walletEnabled, setWalletEnabled] = useState(true);

  const totals = useMemo(() => {
    const selected = coupons.find((coupon) => coupon.id === selectedCoupon);
    const discount = selected?.value ?? 0;
    const walletApplied = walletEnabled ? wallet.applied : 0;
    const taxable = Math.max(plan.price - discount - walletApplied, 0);
    const tax = Math.round(taxable * 0.18);
    const total = taxable + tax;

    return { discount, walletApplied, tax, total };
  }, [selectedCoupon, walletEnabled]);

  return (
    <Card className="sticky top-6 overflow-hidden">
      <div className="bg-ink-900 px-5 py-5 text-white sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-brand-100">
              {plan.label}
            </p>
            <h2 className="mt-2 text-xl font-extrabold">{plan.name}</h2>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-brand-100">
            <Sparkles className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-6 rounded-lg border border-white/10 bg-white/8 p-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-ink-200">Plan price</p>
              <p className="mt-1 text-3xl font-extrabold tracking-normal">
                {formatINR(plan.price)}
                <span className="text-sm font-semibold text-ink-300">/{plan.cadence}</span>
              </p>
            </div>
            <button
              type="button"
              className="focus-ring inline-flex items-center gap-1 rounded-sm text-sm font-bold text-brand-100 transition-colors hover:text-white"
            >
              Upgrade
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-300">{plan.credits}</p>
        </div>
      </div>

      <div className="space-y-5 px-5 py-5 sm:px-6">
        <WalletCard
          balance={wallet.balance}
          applied={wallet.applied}
          enabled={walletEnabled}
          onToggle={() => setWalletEnabled((value) => !value)}
        />

        <CouponSection
          coupons={coupons}
          expanded={couponExpanded}
          onToggle={() => setCouponExpanded((value) => !value)}
          couponCode={couponCode}
          onCouponCodeChange={setCouponCode}
          selectedCoupon={selectedCoupon}
          onSelectCoupon={setSelectedCoupon}
        />

        <PricingBreakdown
          subtotal={plan.price}
          discount={totals.discount}
          walletApplied={totals.walletApplied}
          tax={totals.tax}
          total={totals.total}
        />

        <Button fullWidth size="lg" className="mt-2">
          <CreditCard className="h-5 w-5" />
          Pay {formatINR(totals.total)}
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-ink-500">
          <ShieldCheck className="h-4 w-4 text-success-700" />
          Payments are secured by encrypted checkout
        </div>
      </div>
    </Card>
  );
}
