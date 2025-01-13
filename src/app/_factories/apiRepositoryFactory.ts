import UsersRepository from "@/app/_repositories/users";

type Repositories = {
  users: typeof UsersRepository;
};

const repositories = {
  users: UsersRepository,
};

const RepositoryFactory = {
  get: (name: keyof Repositories) => repositories[name],
};

export default RepositoryFactory;
