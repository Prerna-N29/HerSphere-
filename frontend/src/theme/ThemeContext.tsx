import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeName, themes } from './themes';

interface ThemeContextType {
  themeName: ThemeName;
  theme: (typeof themes)[ThemeName];
  setThemeName: (themeName: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const THEME_STORAGE_KEY = '@hersphere_theme';

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [themeName, setThemeNameState] =
    useState<ThemeName>('blush');

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme =
          await AsyncStorage.getItem(THEME_STORAGE_KEY);

        if (
          savedTheme &&
          savedTheme in themes
        ) {
          setThemeNameState(savedTheme as ThemeName);
        }
      } catch (error) {
        console.log('Failed to load theme:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadTheme();
  }, []);

  const setThemeName = async (newTheme: ThemeName) => {
    setThemeNameState(newTheme);

    try {
      await AsyncStorage.setItem(
        THEME_STORAGE_KEY,
        newTheme
      );
    } catch (error) {
      console.log('Failed to save theme:', error);
    }
  };

  const theme = themes[themeName];

  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        theme,
        setThemeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used inside ThemeProvider'
    );
  }

  return context;
}
