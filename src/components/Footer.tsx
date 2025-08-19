import React from 'react';
export function Footer() {
  return <footer className="w-full bg-black text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">FIVE GUYS</h2>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">LOCATIONS</h3>
          <p className="mb-2">NUTRITION & ALLERGENS</p>
          <p className="mb-2">WE'RE HIRING</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">FIVE GUYS GEAR</h3>
          <p className="mb-2">GIFT CARDS</p>
          <p className="mb-2">FEEDBACK</p>
        </div>
      </div>
    </footer>;
}