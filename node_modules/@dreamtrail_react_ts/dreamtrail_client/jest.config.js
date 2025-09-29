module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  roots: ["<rootDir>/test"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
