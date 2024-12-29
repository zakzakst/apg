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
  // 結構面倒なエラーみたい
  // transform: {
  //   "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  // },
};

export default createJestConfig(config);

// NOTE: 下記を参考に試してみたが、うまく動作しなかった
// https://dev.classmethod.jp/articles/next-js-jest-vanilla-extract-doesnt-work/
// const test = async () => {
//   const fixConfig = await createJestConfig(config)();
//   if (fixConfig.moduleNameMapper === undefined) {
//     return null;
//   }
//   // WARN: キーはNext.jsのバージョンなどにより変化する可能性があります
//   delete fixConfig.moduleNameMapper["^.+\\.(css|sass|scss)$"];
//   // WARN: なぜか`config.transform`に含めても動作しないのでここで定義
//   fixConfig.transform = {
//     "^.+\\.css\\.ts$": "@vanilla-extract/jest-transform",
//     ...config.transform,
//   };
//   return fixConfig;
// };
// export default test;
