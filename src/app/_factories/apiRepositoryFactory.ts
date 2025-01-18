import UsersRepository from "@/app/_repositories/users";
import BlogRepository from "@/app/_repositories/blog";

type Repositories = {
  users: typeof UsersRepository;
  blog: typeof BlogRepository;
};

const repositories = {
  users: UsersRepository,
  blog: BlogRepository,
};

const RepositoryFactory = (name: keyof Repositories) => repositories[name];

export default RepositoryFactory;
