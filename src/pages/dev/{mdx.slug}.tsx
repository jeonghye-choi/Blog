import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import dummyImg2 from 'static/image/dummyImg2.jpg';
import 'styles/devPost.scss';

const DevPost = ({ data }: any) => {
  return (
    <Layout>
      <div className="dev-post">
        <article className="main-image">
          <img src={dummyImg2} />
        </article>
        <article className="post-info">
          {data.mdx.frontmatter.tags.map((tag: string, index: number) => (
            <span key={index + tag} className="tag highlight">
              {tag}
            </span>
          ))}
          <div className="title">{data.mdx.frontmatter.title}</div>
          <div className="date">{data.mdx.frontmatter.date}</div>
        </article>
        <article className="post-contents">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        tags
      }
      body
    }
  }
`;

export default DevPost;
