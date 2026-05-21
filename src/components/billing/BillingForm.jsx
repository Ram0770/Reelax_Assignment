import { ArrowLeft, Building2, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import InputField from '../common/InputField.jsx';
import SelectField from '../common/SelectField.jsx';
import { cities, initialBillingDetails, states } from '../../constants/formOptions.js';

const textFields = [
  { id: 'companyName', label: 'Company Name', autoComplete: 'organization' },
  { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { id: 'gstNumber', label: 'GST Number' },
  { id: 'panNumber', label: 'PAN Number' },
  { id: 'premise', label: 'Premise / House No' },
  { id: 'street', label: 'Street' },
  { id: 'country', label: 'Country', autoComplete: 'country-name' },
  { id: 'pinCode', label: 'Pin Code', autoComplete: 'postal-code' },
];

export default function BillingForm({ details, onChange, onReset }) {
  return (
    <Card id="billing" className="overflow-hidden">
      <div className="border-b border-ink-200 px-5 py-5 sm:px-7 lg:px-8">
        <a
          href="#plans"
          className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-bold text-brand-600 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to plans
        </a>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-ink-400">
              Billing Information
            </p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-normal text-ink-900 sm:text-3xl">
              Review your details
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-500">
              Confirm the business details used for invoices, tax records, and payment receipts.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-success-100 bg-success-50 px-4 py-3 text-success-700">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <div>
              <p className="text-sm font-bold">Secure checkout</p>
              <p className="text-xs font-medium">256-bit encrypted</p>
            </div>
          </div>
        </div>
      </div>

      <form className="px-5 py-6 sm:px-7 lg:px-8" onSubmit={(event) => event.preventDefault()}>
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-ink-200 bg-ink-50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-brand-600 shadow-soft">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-ink-900">Business billing profile</p>
            <p className="truncate text-xs leading-5 text-ink-500">
              Invoice issued to {details.companyName || initialBillingDetails.companyName}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {textFields.slice(0, 6).map((field) => (
            <InputField
              key={field.id}
              {...field}
              value={details[field.id]}
              onChange={onChange}
            />
          ))}

          <SelectField label="State" id="state" value={details.state} onChange={onChange} options={states} />
          <SelectField label="City" id="city" value={details.city} onChange={onChange} options={cities} />

          {textFields.slice(6).map((field) => (
            <InputField
              key={field.id}
              {...field}
              value={details[field.id]}
              onChange={onChange}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-ink-200 pt-5 sm:flex-row sm:justify-end">
          <Button variant="secondary" fullWidth className="sm:w-auto" onClick={onReset}>
            Cancel
          </Button>
          <Button type="submit" fullWidth className="sm:w-auto">
            Save Details
          </Button>
        </div>
      </form>
    </Card>
  );
}
