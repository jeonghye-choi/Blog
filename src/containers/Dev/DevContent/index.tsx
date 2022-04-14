import { PostType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';

import './devContent.scss';

function DevContent(props: { posts: PostType[] }) {
  return (
    <section className="content">
      {props.posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PhotoCard key={id} {...frontmatter} />
      ))}
    </section>
  );
}

export default DevContent;
