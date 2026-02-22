import { createSignal, onCleanup, onMount } from 'solid-js'
import {
  THEME_OPTIONS,
  THEME_STORAGE_KEY,
  applyThemeToDocument,
  isThemePreference,
} from '../theme'
import type { ThemePreference } from '../theme'

const themeLabelMap: Record<ThemePreference, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}

export function Lightbar() {
  const [themePreference, setThemePreference] = createSignal<ThemePreference>(
    'system',
  )

  const saveThemePreference = (preference: ThemePreference) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, preference)
    } catch {
      // Ignore storage failures and still apply the requested mode.
    }
  }

  const selectTheme = (preference: ThemePreference) => {
    setThemePreference(preference)
    applyThemeToDocument(preference)
    saveThemePreference(preference)
  }

  onMount(() => {
    let savedPreference: string | null = null
    try {
      savedPreference = localStorage.getItem(THEME_STORAGE_KEY)
    } catch {
      savedPreference = null
    }
    const initialPreference = isThemePreference(savedPreference)
      ? savedPreference
      : 'system'

    setThemePreference(initialPreference)
    applyThemeToDocument(initialPreference)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemThemeChange = () => {
      if (themePreference() === 'system') {
        applyThemeToDocument('system')
      }
    }

    mediaQuery.addEventListener('change', onSystemThemeChange)
    onCleanup(() => mediaQuery.removeEventListener('change', onSystemThemeChange))
  })

  return (
    <div class="print:hidden">
      <div class="h-1 bg-linear-to-r from-blue-600 to-pink-600"></div>

      <div class="mx-auto flex max-w-3xl justify-end px-4 pt-4">
        <div class="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white/75 p-1 backdrop-blur dark:border-gray-700 dark:bg-gray-900/75">
          {THEME_OPTIONS.map((option) => (
            <button
              type="button"
              onClick={() => selectTheme(option)}
              class="rounded-full px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              classList={{
                'bg-gray-900 text-gray-100 hover:text-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:text-gray-900':
                  themePreference() === option,
              }}
              aria-pressed={themePreference() === option}
              aria-label={`Switch theme to ${themeLabelMap[option].toLowerCase()} mode`}
            >
              {themeLabelMap[option]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
