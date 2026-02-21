'use client'

interface CheckoutButtonProps {
    priceId: string;
    planName: 'basic' | 'pro';
}

export default function CheckoutButton({ priceId, planName }: CheckoutButtonProps) {
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

    const baseStyles = "w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 active:scale-[0.98]"

    if (planName === 'basic') {
        return (
            <button
                onClick={handleCheckout}
                className={`${baseStyles} bg-white/5 hover:bg-white/10 text-white border border-white/10`}
            >
                Get basic
            </button>
        )
    }

    return (
        <button
            onClick={handleCheckout}
            className={`${baseStyles} bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30`}
        >
            Get advanced
        </button>
    )
}
