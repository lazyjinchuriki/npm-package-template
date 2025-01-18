module.exports = {
  extends: ['../../.eslintrc.js'],
  rules: {
    // Add any UI package specific rules here
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
