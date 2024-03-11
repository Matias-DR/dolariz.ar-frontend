import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/*.tsx',
    './app/**/*.tsx',
    './components/*.tsx',
    './components/**/*.tsx'
  ],
  theme: {
    extend: {
      keyframes: {
        'bip': {
          '0%': { opacity: '0.25' },
          '1%': { opacity: '0.5' },
          '20%': { opacity: '0.25' },
          '100%': { opacity: '0.25' },
        }
      },
    }
  }
}

export default config
