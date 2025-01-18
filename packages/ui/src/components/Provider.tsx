import React, { createContext, useContext, ReactNode } from 'react';

interface ContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const UIContext = createContext<ContextValue | undefined>(undefined);

export interface UIProviderProps {
  children: ReactNode;
  initialTheme?: 'light' | 'dark';
}

export const UIProvider: React.FC<UIProviderProps> = ({
  children,
  initialTheme = 'light',
}) => {
  const [theme, setTheme] = React.useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
