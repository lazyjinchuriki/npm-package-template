import React from 'react';
import { useUI } from '../Provider';

export interface TestingProps {
  title?: string;
}

export const Testing: React.FC<TestingProps> = ({ title = 'Hello World' }) => {
  const { theme, toggleTheme } = useUI();

  return (
    <div className="lj-flex lj-flex-col lj-items-center lj-gap-4 lj-p-6 lj-rounded-lg lj-shadow-md">
      <h2 className="lj-text-2xl lj-font-bold lj-text-gray-800 dark:lj-text-white">
        {title}
      </h2>
      <p className="lj-text-gray-600 dark:lj-text-gray-300">
        Current theme: {theme}
      </p>
      <button
        onClick={toggleTheme}
        className="lj-px-4 lj-py-2 lj-bg-blue-500 lj-text-white lj-rounded-md hover:lj-bg-blue-600 lj-transition-colors"
      >
        Toggle Theme
      </button>
    </div>
  );
};
