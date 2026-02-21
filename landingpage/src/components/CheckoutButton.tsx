'use client'

interface CheckoutButtonProps {
    priceId: string;
    planName: 'universal';
}

export default function CheckoutButton({ priceId }: CheckoutButtonProps) {
    const handleCheckout = async () => {
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId }),
            })
            const data = await response.json()
            if (data.url) {
                window.location.href = data.url
            }
        } catch (error) {
            console.error('Failed to checkout:', error)
        }
    }

    return (
        <button
            onClick={handleCheckout}
            className="w-full py-4 px-4 rounded-xl font-bold text-lg bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-colors duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] active:scale-[0.98]"
        >
            Subscribe Now
        </button>
    )
}
