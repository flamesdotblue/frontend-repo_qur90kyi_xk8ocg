import React from 'react';
import { Rocket, FileDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white shadow-lg shadow-blue-500/30">
            <Rocket size={20} />
          </div>
          <div>
            <p className="text-base font-semibold text-gray-900 dark:text-white">Elegant Reports</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Fast • Polished • Delightful</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <FileDown size={18} /> Export PDF in style
        </div>
      </div>
    </div>
  );
};

export default Header;
