import { authors } from "@/constants/mocks/authors";

class AuthorsApiService {
  static getSingleAuthor(id: string) {
    return authors.find(item => item.id == id)
  }
};

export default AuthorsApiService;