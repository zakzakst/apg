import { NextRepository, Response } from "./_repository";
import { Blog } from "@/app/_types/blog";
const resource: string = "/blogs";

type PostBlogRequest = Blog;
type PostBlogResponse = Response<Blog>;

const BlogRepository = () => ({
  // get: (): Promise<GetBlogResponse> => {
  //   return Repository.get(`${resource}`);
  // },
  post(payload: PostBlogRequest): Promise<PostBlogResponse> {
    return NextRepository.post(`${resource}`, payload);
  },
});

export default BlogRepository;
