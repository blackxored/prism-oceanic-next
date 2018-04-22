module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'jest'],
  env: {
    jest: true,
  },
};
