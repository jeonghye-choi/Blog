import { PostsEdgeType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';
import { useMemo } from 'react';

import './writeContent.scss';

interface WriteContentProps {
  page: string;
  posts: PostsEdgeType[];
  selectedTag: string;
}

function WriteContent(props: WriteContentProps) {
  const { page, posts, selectedTag } = props;

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { tags },
            slug,
          },
        }: PostsEdgeType) =>
          selectedTag != 'All'
            ? tags?.includes(selectedTag)
            : true && page === slug.split('/')[0],
      ),
    [selectedTag],
  );

  return (
    <section className="write-content">
      {filteredPosts.map(
        ({ node: { id, frontmatter, slug } }: PostsEdgeType) => (
          <PhotoCard key={id} id={id} link={slug} {...frontmatter} />
        ),
      )}
    </section>
  );
}

export default WriteContent;
