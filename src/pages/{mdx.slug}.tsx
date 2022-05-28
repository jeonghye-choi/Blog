import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Post from 'containers/Post';
import { graphql } from 'gatsby';
import * as React from 'react';
import 'styles/page.scss';

function PostPage(props: any) {
  return (
    <Layout>
      <Seo
        title="정혜의 개발 저장소"
        description="배우고 이해한 것들을 정리하는 저장소입니다."
      />
      <Post {...props.data} />
    </Layout>
  );
}

export default PostPage;

export const query = graphql`
  query ($id: String) {
    post: mdx(id: { eq: $id }) {
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
      body
    }
  }
`;
