import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeType = {
  background: string[];
  text: string;
  inputBackground: string;
  inputBorder: string;
  buttonBackground: string;
  buttonText: string;
};

const themes = {
  light: {
    background: ['#EFEAFF', '#FFFFFF'],
    text: '#000000',
    inputBackground: '#FFFFFF',
    inputBorder: '#ccc',
    buttonBackground: '#9333EA',
    buttonText: '#FFFFFF',
  },
  dark: {
    background: ['#121212', '#121212'],
    text: '#FFFFFF',
    inputBackground: '#333333',
    inputBorder: '#555555',
    buttonBackground: '#9333EA',
    buttonText: '#FFFFFF',
  },
};

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { themes };
