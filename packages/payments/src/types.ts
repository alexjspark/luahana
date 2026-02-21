import Stripe from 'stripe';

export interface SubscriptionPlan {
    id: string;
    name: string;
    description: string;
    priceId: string;
    priceAmount: number;
    currency: string;
    interval: 'month' | 'year';
}

export type CheckoutSessionOptions = {
    priceId: string;
    customerId?: string;
    customerEmail?: string;
    successUrl: string;
    cancelUrl: string;
    clientReferenceId?: string;
};

// You can extend Stripe's own types if you need custom metadata
export type LuahanaCustomer = Stripe.Customer & {
    metadata: {
        userId?: string;
    }
};
