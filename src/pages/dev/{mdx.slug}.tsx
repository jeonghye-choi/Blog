import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import 'styles/devPost.scss';

const DevPost = ({ data }: any) => {
  const main_image: any | undefined = getImage(data.mdx.frontmatter.main_image);
  return (
    <Layout>
      <div className="dev-post">
        <article className="main-image">
          <GatsbyImage image={main_image} alt="" />
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
        main_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default DevPost;
