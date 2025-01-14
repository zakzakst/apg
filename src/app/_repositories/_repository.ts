import axios from "axios";

const baseDomein: string = "https://jsonplaceholder.typicode.com";

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

const Repository = axios.create({
  baseURL: baseDomein,
});

export default Repository;
