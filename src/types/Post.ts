export interface PostListType {
  data: PostType[]
  lang: string
}

export interface PostType {
  id: string
  title: string
  meta_title?: string
  description: string
  imageUrl?: string
  categories?: string[]
  author: string
  tags?: string[]
  createdAt: Date
  updatedAt: Date
  status: string
  slug?: string
  content: string
  comments: Comment[]
};

export interface Comment {
  id: string
  author: string
  text: string
  createdAt: Date
  updatedAt?: Date
  parentId?: string
}

export interface PostCategory {
  id: string
  name: string
}

export interface AuthorType {
  id: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
  status: string
  description: string
  imageUrl?: string
}
