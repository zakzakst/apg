import axios from "axios";

const baseDomein: string = "https://jsonplaceholder.typicode.com";
const nextBaseDomein: string = "http://localhost:3000/api";

// export type Response<T> =
//   | {
//       // エラー時のレスポンス
//       status: number;
//       message: string;
//     }
//   | {
//       // 成功時のレスポンス
//       status: number;
//       data: T;
//     };

export type Response<T> = {
  // 成功時のレスポンス
  status: number;
  data: T;
};

export const Repository = axios.create({
  baseURL: baseDomein,
});

export const NextRepository = axios.create({
  baseURL: nextBaseDomein,
});
