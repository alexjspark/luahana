import Stripe from 'stripe';

// Fallback to a dummy key during Next.js static build phase if the env var is missing
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build_only';

if (!process.env.STRIPE_SECRET_KEY) {
    console.warn('⚠️  STRIPE_SECRET_KEY is missing. Using a dummy key for build purposes.');
}

export const stripe = new Stripe(stripeKey, {
    apiVersion: '2025-02-24.acacia',
    typescript: true,
    appInfo: {
        name: 'luahana',
        version: '0.1.0'
    }
});
