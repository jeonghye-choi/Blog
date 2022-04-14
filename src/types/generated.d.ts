declare module 'CreatePostPagesQuery' {
  export interface PostFrontmatterType {
    title: string;
    date: string;
    tags?: string[];
    categories?: string[];
    thumbnail: string;
  }

  export interface PostType {
    node: {
      id: string;
      frontmatter: PostFrontmatterType;
      slug: string;
    };
  }

  export interface PostsType {
    posts: {
      edges: PostType[];
    };
  }
}
