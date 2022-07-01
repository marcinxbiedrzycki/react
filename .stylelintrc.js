module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'color-named': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'font-weight-notation': 'numeric',
    'no-duplicate-selectors': true,
    'string-quotes': 'single',
  },
};
