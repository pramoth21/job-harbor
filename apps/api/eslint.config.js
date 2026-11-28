import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'drizzle/',
    ],
  },

  js.configs.recommended,

  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
]