import { stripe } from './client';
import type { CheckoutSessionOptions } from './types';

export async function createCheckoutSession(options: CheckoutSessionOptions) {
    const sessionConfig: any = {
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        line_items: [
            {
                price: options.priceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: options.successUrl,
        cancel_url: options.cancelUrl,
    };

    if (options.customerId) {
        sessionConfig.customer = options.customerId;
    } else if (options.customerEmail) {
        sessionConfig.customer_email = options.customerEmail;
    }

    if (options.clientReferenceId) {
        sessionConfig.client_reference_id = options.clientReferenceId;
    }

    return stripe.checkout.sessions.create(sessionConfig);
}
