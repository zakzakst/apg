// https://qiita.com/squarekzmlviy/items/0de19af2655cfd0a4d3e
import Repository from "./_repository";
import { User } from "@/app/_types/user";
const resource: string = "/users";

// TODO: Next.jsのapi機能使ってpostのほうも試す（その際にパラメータの型も作成する）
// TODO: エラー時のことも考慮したレスポンスの型指定方法を調べる

type GetUserResponse = {
  data: User[];
};

const UsersRepository = () => ({
  get: (): Promise<GetUserResponse> => {
    return Repository.get(`${resource}`);
  },
  // post(payload: Object) {
  //   return Repository.post(`${resource}`, payload);
  // },
});

export default UsersRepository;
