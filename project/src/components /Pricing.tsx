import React from 'react';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 299,
    description: 'Perfect for beginners ready to start their journey',
    features: [
      'Done-for-you store setup',
      'Weekly group coaching calls',
      'Access to community forum',
      'Product research templates',
      'Basic marketing materials',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Professional',
    price: 502,
    description: 'For serious entrepreneurs ready to scale',
    features: [
      'Everything in Starter',
      '1-on-1 mentorship sessions',
      'Advanced marketing strategies',
      'Supplier connection network',
      'Priority support access',
      'Custom store optimization',
    ],
    cta: 'Scale Now',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 1001,
    description: 'Full-service scaling solution',
    features: [
      'Everything in Professional',
      'Daily 1-on-1 coaching',
      'Done-for-you store setup',
      'Custom marketing campaigns',
      'Direct supplier introductions',
      'Revenue growth guarantee',
    ],
    cta: 'Contact Us',
    featured: true,
  },
];

export function Pricing() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Investment Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan to accelerate your ecommerce journey
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 bg-white border rounded-2xl shadow-lg ${
                tier.featured ? 'ring-2 ring-green-600' : ''
              }`}
            >
              {tier.featured && (
                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-white bg-green-600">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <button
                  className={`mt-8 w-full rounded-lg px-6 py-3 text-base font-medium ${
                    tier.featured
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
              <div className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
