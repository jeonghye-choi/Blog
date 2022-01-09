import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import './devPost.scss';

const DevPost = ({ data }: any) => {
  const postData = data.mdx;
  const main_image: any | undefined = getImage(postData.frontmatter.main_image);

  const disqusConfig = {
    url: `http://localhost:8000/dev/${postData.slug}`,
    identifier: postData.id,
    title: 'title',
  };

  return (
    <Layout>
      {main_image === undefined || (
        <article className="main-image">
          <GatsbyImage image={main_image} alt="" />
        </article>
      )}
      <div className="dev-post">
        <article className="post-info">
          <div className="title">{postData.frontmatter.title}</div>
          <div className="date">{postData.frontmatter.date}</div>
        </article>
        <article className="post-contents">
          <MDXRenderer>{postData.body}</MDXRenderer>
        </article>
        <article className="tag-box">
          {postData.frontmatter.tags.map((tag: string, index: number) => (
            <span key={index + tag} className="tag">
              #{tag}
            </span>
          ))}
        </article>
        <Disqus config={disqusConfig} />
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
      id
      body
      slug
    }
  }
`;

export default DevPost;
