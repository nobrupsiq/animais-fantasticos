module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-param-reassign": 0,
    "import/extensions": 0,
    "no-console": 0,
    "max-classes-per-file": ["error", 2],
  },
};
