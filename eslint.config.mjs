import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import drizzlePlugin from 'eslint-plugin-drizzle'
import globals from 'globals'

export default tseslint.config(
  { ignores: ['node_modules/', 'dist/'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { drizzle: drizzlePlugin },
    rules: {
      'drizzle/enforce-delete-with-where': 'error',
      'drizzle/enforce-update-with-where': 'error'
    }
  },
  {
    languageOptions: { globals: { ...globals.node } },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'off'
      // '@typescript-eslint/explicit-module-boundary-types': 'off',
    }
  }
)