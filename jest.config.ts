import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  // TODO: vanilla-extractをjestに対応させる
  // transform: {
  //   "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  // },
};

export default createJestConfig(config);
