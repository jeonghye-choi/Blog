import { PostType } from 'CreatePostPagesQuery';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';

import './post.scss';

function Post(props: { post: PostType }) {
  const { body, frontmatter } = props.post;
  const { date, title, categories, tags } = frontmatter;
  const thumbnail = getImage(frontmatter.thumbnail);

  return (
    <>
      <section className="post">
        <div className="post-thumbnail">
          {thumbnail && <GatsbyImage image={thumbnail} alt="thumbnail" />}
        </div>
        <article className="post-header-wrap">
          <div className="post-category">
            {categories?.map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </div>
          <h1 className="post-title">{title}</h1>
          <div className="post-desc">
            <div>
              Jeonghye (정혜)
              <span>·</span>
              {date}
            </div>
          </div>
        </article>
        <article className="post-body">
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <article className="post-footer">
          {tags?.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </article>
      </section>
    </>
  );
}

export default Post;
