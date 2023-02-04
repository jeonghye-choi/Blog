import { PostsEdgeType } from 'CreatePostPagesQuery';
import PhotoListCard from 'components/PhotoListCard';
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
          <PhotoListCard
            key={id}
            id={id}
            date={frontmatter.date}
            title={frontmatter.title}
            subtitle={frontmatter.subtitle}
            thumbnail={frontmatter.thumbnail}
            link={slug}
            tags={[frontmatter.author ?? '작가미상']}
          />
        ),
      )}
    </section>
  );
}

export default BookContent;
