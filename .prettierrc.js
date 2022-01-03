module.exports = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  importOrder: [
    '^@pages/(.*)$',
    '^@components/(.*)$',
    '^@utils/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,

  formatOnSave: true,
};
