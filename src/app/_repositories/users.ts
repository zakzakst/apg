// https://qiita.com/squarekzmlviy/items/0de19af2655cfd0a4d3e
import Repository from "./_repository";
const resource: string = "/todos";

// TODO: 引数パラメータの型作る

const UsersRepository = () => ({
  get: () => {
    return Repository.get(`${resource}`);
  },
  // post(payload: Object) {
  //   return Repository.post(`${resource}`, payload);
  // },
});

export default UsersRepository;
