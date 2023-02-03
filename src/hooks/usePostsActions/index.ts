import { PostsType } from 'CreatePostPagesQuery';
import { graphql, useStaticQuery } from 'gatsby';

function usePostsActions() {
  function getPosts() {
    const data = useStaticQuery<PostsType>(
      graphql`
        query {
          posts: allMdx(
            sort: {
              fields: [frontmatter___date, frontmatter___title]
              order: DESC
            }
          ) {
            edges {
              node {
                id
                slug
                frontmatter {
                  author
                  bookcover {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  categories
                  date(formatString: "YYYY.MM.DD")
                  publisher
                  subtitle
                  tags
                  thumbnail {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  title
                }
                slug
                body
              }
            }
          }
        }
      `,
    );

    return data.posts.edges;
  }

  return {
    getPosts,
  };
}

export default usePostsActions;
