module.exports = {
  trailingComma: "es5",
  singleQuote: true,
  arrowParens: "always",
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      options: {
        singleQuote: false,
        printWidth: 120,
      },
    },
  ],
};
