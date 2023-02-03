import { PostsEdgeType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';
import { useMemo } from 'react';

import './bookContent.scss';

interface BookContentProps {
  posts: PostsEdgeType[];
}

function BookContent(props: BookContentProps) {
  const page = 'book';
  const filteredPosts = useMemo(
    () =>
      props.posts.filter(
        ({ node: { slug } }: PostsEdgeType) => page === slug.split('/')[0],
      ),
    [],
  );

  return (
    <section className="book-content">
      {filteredPosts.map(
        ({ node: { id, frontmatter, slug } }: PostsEdgeType) => (
          <PhotoCard key={id} id={id} link={slug} {...frontmatter} />
        ),
      )}
    </section>
  );
}

export default BookContent;
