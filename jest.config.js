module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testMatch: ["**/?(*.)(test).(j|t)s?(x)"],
  moduleDirectories: ["node_modules", "."],
};
