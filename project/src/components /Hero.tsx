import React from 'react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <h1 className="mt-12 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-10 sm:text-6xl lg:mt-20">
              Unlock the Secrets to a{' '}
              <span className="text-green-600">7-Figure Shopify Store</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Join over 1,000+ entrepreneurs who have scaled their businesses with our proven mentorship program.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="https://calendly.com/your-calendar-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Book a Call
              </a>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <Play className="h-5 w-5 mr-2" />
                Watch Success Stories
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              Trusted by entrepreneurs from 50+ countries worldwide
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
                alt="Entrepreneur success"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
