
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const initiatePayment = async (amount) => {
  try {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    
    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};
