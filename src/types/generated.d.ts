declare module 'CreatePostPagesQuery' {
  export interface PostFrontmatterType {
    title: string;
    date: string;
    tags?: string[];
    categories?: string[];
    thumbnail?: string;
  }

  export interface PostType {
    frontmatter: PostFrontmatterType;
    body: string;
  }

  export interface PostsEdgeType {
    node: {
      id: string;
      frontmatter: PostFrontmatterType;
      slug: string;
    };
  }

  export interface PostsType {
    posts: {
      edges: PostsEdgeType[];
    };
  }
}
