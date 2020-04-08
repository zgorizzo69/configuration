module.exports = {
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 8, //2017 (same as 8)
    sourceType: "module", //code is in ECMAScript modules
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2017: true,
    browser: true,
    jest: true,
  },
};
