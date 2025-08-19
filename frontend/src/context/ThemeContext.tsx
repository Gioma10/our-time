import { createContext } from "react";

export type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

// Create a context
export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});
