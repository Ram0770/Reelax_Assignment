import { useState } from 'react';
import { CreditCard, LayoutDashboard, ReceiptText, ShieldCheck, X } from 'lucide-react';
import Header from './Header.jsx';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Billing', icon: CreditCard, active: true },
  { label: 'Invoices', icon: ReceiptText },
  { label: 'Security', icon: ShieldCheck },
];

function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={[
          'fixed inset-0 z-30 bg-ink-900/35 transition-opacity lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={[
          'fixed bottom-0 left-0 top-0 z-40 w-72 border-r border-ink-200 bg-white px-5 py-5 transition-transform duration-300 lg:static lg:z-auto lg:w-20 lg:translate-x-0 lg:px-3 xl:w-64 xl:px-5',
          open ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-base font-extrabold text-white shadow-button">
              R
            </div>
            <div className="lg:hidden xl:block">
              <p className="text-sm font-extrabold text-ink-900">Reelax</p>
              <p className="text-xs font-medium text-ink-500">Campaign billing</p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-md text-ink-500 hover:bg-ink-100 lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="mt-8 space-y-2">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              href="#billing"
              key={label}
              className={[
                'focus-ring flex h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold transition-all duration-200 lg:justify-center xl:justify-start',
                active
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900',
              ].join(' ')}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              <span className="lg:sr-only xl:not-sr-only">{label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page px-0 py-0 sm:px-4 sm:py-5 lg:px-6 3xl:px-10">
      <div className="mx-auto flex min-h-screen max-w-screen-3xl overflow-hidden bg-white shadow-shell sm:min-h-[calc(100vh-2.5rem)] sm:rounded-2xl">
        <Sidebar open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header onMenuClick={() => setIsMenuOpen(true)} />
          <main className="min-w-0 flex-1 bg-page px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
