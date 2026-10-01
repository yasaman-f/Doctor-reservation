import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  readThemePreference,
  writeThemePreference,
  type ThemePreference,
} from '@/shared/utils/storage';

export type ResolvedTheme = 'light' | 'dark';

type ThemeContextValue = {
  /** Stored preference the user picked (defaults to 'system'). */
  preference: ThemePreference;
  /** Actively applied theme on <html>, resolving 'system' to light/dark. */
  theme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
  /** Toggle between the two resolved themes. */
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const ROOT_SELECTOR = 'html';

function systemPrefersDark(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function resolve(preference: ThemePreference): ResolvedTheme {
  if (preference === 'system') {
    return systemPrefersDark() ? 'dark' : 'light';
  }
  return preference;
}

function applyTheme(theme: ResolvedTheme): void {
  document.documentElement.setAttribute('data-theme', theme);
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [preference, setPreferenceState] = useState<ThemePreference>(
    () => readThemePreference() ?? 'system',
  );

  const [theme, setTheme] = useState<ResolvedTheme>(() =>
    resolve(readThemePreference() ?? 'system'),
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // When following the system, stay in sync with OS changes.
  useEffect(() => {
    if (preference !== 'system') {
      return;
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => setTheme(systemPrefersDark() ? 'dark' : 'light');
    onSystemChange();
    media.addEventListener('change', onSystemChange);
    return () => media.removeEventListener('change', onSystemChange);
  }, [preference]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    writeThemePreference(next);
    setTheme(resolve(next));
  }, []);

  const toggleTheme = useCallback(() => {
    setPreference(theme === 'dark' ? 'light' : 'dark');
  }, [setPreference, theme]);

  const value = useMemo(
    () => ({ preference, theme, setPreference, toggleTheme }),
    [preference, theme, setPreference, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ROOT_SELECTOR };