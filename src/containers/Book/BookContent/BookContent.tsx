import { PostsEdgeType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';

import './bookContent.scss';

interface BookContentProps {
  posts: PostsEdgeType[];
}

function BookContent(props: BookContentProps) {
  const { posts } = props;

  return (
    <section className="book-content">
      {posts.map(({ node: { id, frontmatter, slug } }: PostsEdgeType) => (
        <PhotoCard key={id} id={id} link={slug} {...frontmatter} />
      ))}
    </section>
  );
}

export default BookContent;
