import { Bell, Menu, Plus, Search, Settings, UserRound } from 'lucide-react';
import Button from '../common/Button.jsx';

export default function Header({ onMenuClick }) {
  return (
    <header className="flex flex-col gap-4 border-b border-ink-200 bg-white px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-ink-200 text-ink-600 transition-colors hover:bg-ink-50 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative min-w-0 flex-1 lg:w-96 lg:flex-none">
          <Search
            aria-hidden="true"
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
          />
          <input
            type="search"
            aria-label="Search campaigns"
            placeholder="Search campaigns, invoices, or plans"
            className="focus-ring h-11 w-full rounded-md border border-ink-200 bg-ink-50 pl-11 pr-4 text-sm font-medium text-ink-800 transition-all duration-200 placeholder:text-ink-400 hover:border-ink-300 focus:border-brand-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="upgrade" size="sm" className="flex-1 xs:flex-none">
          Upgrade
        </Button>
        <Button size="sm" className="flex-1 xs:flex-none">
          <Plus className="h-4 w-4" />
          Create Campaign
        </Button>
        <div className="ml-auto flex items-center gap-2 xs:ml-0">
          {[Settings, Bell].map((Icon) => (
            <button
              key={Icon.displayName || Icon.name}
              type="button"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 text-ink-500 transition-all duration-200 hover:border-ink-300 hover:bg-ink-50 hover:text-ink-800"
            >
              <Icon className="h-4.5 w-4.5" />
            </button>
          ))}
          <button
            type="button"
            aria-label="Open profile menu"
            className="focus-ring flex h-10 items-center gap-2 rounded-md border border-ink-200 bg-white px-2.5 text-ink-700 transition-all duration-200 hover:border-ink-300 hover:bg-ink-50"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand-50 text-brand-600">
              <UserRound className="h-4 w-4" />
            </span>
            <span className="hidden text-sm font-semibold sm:inline">Ram</span>
          </button>
        </div>
      </div>
    </header>
  );
}
