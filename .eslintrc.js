module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: false, allowNumber: false }],
    eqeqeq: ['error', 'always'],
    'linebreak-style': 'off',
    'no-restricted-exports': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        useTabs: false,
        endOfLine: 'lf',
        printWidth: 120,
        trailingComma: 'es5',
        semi: true,
        jsxSingleQuote: true,
        arrowParens: 'always'
      }
    ],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    yoda: ['error', 'always'],
  },
  settings: {
    react: {
      version: '18',
    },
  },
};
