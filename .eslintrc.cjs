module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '*.config.js',
    '.*rc.js',
    'node_modules/**'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' },
    // Simple-import-sort with recomended settings
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'sort-imports': 0,
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1, },
  plugins: [
    'react-refresh',
    'prettier',
    'simple-import-sort',
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
