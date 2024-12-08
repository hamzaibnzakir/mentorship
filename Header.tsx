import React from 'react';
import { BeakerIcon, Menu } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <BeakerIcon className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Brainbox Ecom Lab</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/success-stories">Success Stories</NavLink>
            <NavLink href="/forum">Forum</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Start Scaling Now
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}