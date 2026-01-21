import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 9.99,
        period: "month",
        features: [
            "100 thumbnails per month",
            "1000 credits per month",
            "1000 credits per month",
            "Unlimited downloads",
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 29.99,
        period: "month",
        features: [
            "500 thumbnails per month",
            "5000 credits per month",
            "5000 credits per month",
            "Unlimited downloads",
            "Unlimited edits",
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 49.99,
        period: "month",
        features: [
            "1000 thumbnails per month",
            "10000 credits per month",
            "10000 credits per month",
            "Unlimited downloads",
            "Unlimited edits",
            "Dedicated support",
            "Priority support",

        ],
        mostPopular: false
    }
];