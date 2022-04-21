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
                  title
                  date(formatString: "YYYY.MM.DD")
                  tags
                  categories
                  thumbnail {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                slug
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
