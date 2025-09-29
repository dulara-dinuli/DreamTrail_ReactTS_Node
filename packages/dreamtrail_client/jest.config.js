export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  roots: ["<rootDir>/test"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testMatch: ["<rootDir>/test/**/*.test.(ts|tsx)"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.test.json",
    },
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
