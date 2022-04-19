import { PostType } from 'CreatePostPagesQuery';
// import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import usePostsActions from 'hooks/usePostsActions';
import * as React from 'react';
import 'styles/page.scss';

function Post(props: { post: PostType }) {
  const post = props.post;

  return (
    <>
      <MDXRenderer>{post.body}</MDXRenderer>
    </>
  );
}

export default Post;
