import { PostsEdgeType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';
import { useMemo } from 'react';

import './writeContent.scss';

interface WriteContentProps {
  posts: PostsEdgeType[];
  selectedTag: string;
}

function WriteContent(props: WriteContentProps) {
  const { posts, selectedTag } = props;

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { tags },
          },
        }: PostsEdgeType) =>
          selectedTag != 'All' ? tags?.includes(selectedTag) : true,
      ),
    [selectedTag],
  );

  return (
    <section className="content">
      {filteredPosts.map(
        ({ node: { id, frontmatter, slug } }: PostsEdgeType) => (
          <PhotoCard key={id} id={id} link={slug} {...frontmatter} />
        ),
      )}
    </section>
  );
}

export default WriteContent;
