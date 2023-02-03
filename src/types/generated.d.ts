declare module 'CreatePostPagesQuery' {
  import { IGatsbyImageData } from 'gatsby-plugin-image';
  export interface PostFrontmatterType {
    date: string;
    title: string;
    subtitle: string;
    tags: string[];
    categories?: string[];
    thumbnail: IGatsbyImageData;
    author?: string;
    bookcover?: IGatsbyImageData;
    publisher?: string;
  }

  export interface PostType {
    frontmatter: PostFrontmatterType;
    body: string;
    id: string;
    slug: string;
  }

  export interface PostsEdgeType {
    node: {
      id: string;
      frontmatter: PostFrontmatterType;
      slug: string;
      body: string;
    };
  }

  export interface PostsType {
    posts: {
      edges: PostsEdgeType[];
    };
  }
}
