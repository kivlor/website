export const THEME_STORAGE_KEY = 'theme-preference'

export type ThemePreference = 'light' | 'dark' | 'system'

export const THEME_OPTIONS: Array<ThemePreference> = ['light', 'dark', 'system']

export function isThemePreference(value: unknown): value is ThemePreference {
  return typeof value === 'string' && THEME_OPTIONS.includes(value as ThemePreference)
}

export function resolveIsDarkMode(
  preference: ThemePreference,
  systemPrefersDark: boolean,
) {
  return preference === 'dark' || (preference === 'system' && systemPrefersDark)
}

export function applyThemeToDocument(preference: ThemePreference) {
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  const isDark = resolveIsDarkMode(preference, systemPrefersDark)
  const root = document.documentElement

  root.classList.toggle('dark', isDark)
  root.style.colorScheme = isDark ? 'dark' : 'light'
  root.dataset.theme = preference
}

export const themeInitScript = `(() => {
  const storageKey = '${THEME_STORAGE_KEY}';
  const media = '(prefers-color-scheme: dark)';
  const root = document.documentElement;

  try {
    const saved = localStorage.getItem(storageKey);
    const preference =
      saved === 'light' || saved === 'dark' || saved === 'system'
        ? saved
        : 'system';
    const isDark =
      preference === 'dark' ||
      (preference === 'system' && window.matchMedia(media).matches);

    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
    root.dataset.theme = preference;
  } catch {
    const isDark = window.matchMedia(media).matches;
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
    root.dataset.theme = 'system';
  }
})();`
