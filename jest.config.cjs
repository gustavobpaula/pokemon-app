module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/?(*.)+(spec|test).(ts|tsx)"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
