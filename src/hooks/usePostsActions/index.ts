import { PostsType } from 'CreatePostPagesQuery';
import { graphql, useStaticQuery } from 'gatsby';

function usePostsActions() {
  function getPosts(isCategories = true, isTags = true) {
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
                frontmatter {
                  title
                  date(formatString: "YYYY.MM.DD")
                  tags
                  categories
                  thumbnail
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
