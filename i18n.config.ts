export const i18n = {
  defaultLocale: 'en',
  locales: ['mk', 'en']
} as const

export type Locale = (typeof i18n)['locales'][number]