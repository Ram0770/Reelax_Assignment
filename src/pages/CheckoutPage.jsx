import { useState } from 'react';
import BillingForm from '../components/billing/BillingForm.jsx';
import MainLayout from '../components/layout/MainLayout.jsx';
import OrderSummary from '../components/summary/OrderSummary.jsx';
import { initialBillingDetails } from '../constants/formOptions.js';

export default function CheckoutPage() {
  const [billingDetails, setBillingDetails] = useState(initialBillingDetails);

  function handleFieldChange(field, value) {
    setBillingDetails((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <MainLayout>
      <div className="mx-auto grid max-w-screen-2xl gap-6 xl:grid-cols-[minmax(0,1fr)_26rem] 3xl:grid-cols-[minmax(0,1fr)_28rem]">
        <BillingForm
          details={billingDetails}
          onChange={handleFieldChange}
          onReset={() => setBillingDetails(initialBillingDetails)}
        />
        <OrderSummary />
      </div>
    </MainLayout>
  );
}
