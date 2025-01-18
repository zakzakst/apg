// https://qiita.com/squarekzmlviy/items/0de19af2655cfd0a4d3e
import { Repository, Response } from "./_repository";
import { User } from "@/app/_types/user";
const resource: string = "/users";

// TODO: Next.jsのapi機能使ってpostのほうも試す（その際にパラメータの型も作成する）
// https://nextjs.org/docs/app/api-reference/file-conventions/route
// TODO: エラー時のことも考慮したレスポンスの型指定方法を調べる（下記参考にする jsonplaceholderでやるの今のスキルだと難しそうだったので自分で作成したapiで試す）
// https://www.ey-office.com/blog_archive/2023/03/21/accurately-define-error-codes-for-each-function/

type GetUserResponse = Response<User[]>;

const UsersRepository = {
  get(): Promise<GetUserResponse> {
    return Repository.get(`${resource}`);
  },
  post() {},
  // post(payload: Object) {
  //   return Repository.post(`${resource}`, payload);
  // },
};

export default UsersRepository;
