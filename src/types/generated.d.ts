declare module 'CreatePostPagesQuery' {
  import { IGatsbyImageData } from 'gatsby-plugin-image';
  export interface PostFrontmatterType {
    title: string;
    date: string;
    tags?: string[];
    categories?: string[];
    thumbnail: IGatsbyImageData;
  }

  export interface PostType {
    frontmatter: PostFrontmatterType;
    body: string;
  }

  export interface PostsEdgeType {
    node: {
      id: string;
      frontmatter: PostFrontmatterType;
      slug?: string;
      body: string;
    };
  }

  export interface PostsType {
    posts: {
      edges: PostsEdgeType[];
    };
  }
}
