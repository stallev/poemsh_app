import { AuthorsData } from "@/constants/mocks/authors";

class AuthorsApiService {
  static getSingleAuthor(id: string) {
    return AuthorsData.find(item => item.id == id)
  }
};

export default AuthorsApiService;