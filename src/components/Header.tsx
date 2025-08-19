import React from 'react';
import { UserIcon } from 'lucide-react';
export function Header() {
  return <header className="w-full bg-white border-b border-gray-200 px-4 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-red-600 font-bold text-3xl">FIVE GUYS</div>
        <div className="flex items-center gap-4">
          <button className="bg-red-600 text-white px-6 py-2 font-bold">
            CUSTOMIZE
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <UserIcon className="h-6 w-6" />
            <span className="font-bold">SIGN IN</span>
          </div>
        </div>
      </div>
    </header>;
}