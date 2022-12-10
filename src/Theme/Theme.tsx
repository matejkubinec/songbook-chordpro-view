import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { Theme } from '../types';

export interface ThemeProviderProps extends PropsWithChildren {
  theme: Theme;
}

export interface ThemeContext {
  theme: Theme;
}

export const ThemeCtx = createContext<ThemeContext>({
  theme: {},
});

export const useTheme = () => useContext(ThemeCtx);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  return <ThemeCtx.Provider value={{ theme }}>{children}</ThemeCtx.Provider>;
};
