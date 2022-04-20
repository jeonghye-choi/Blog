import { PostsEdgeType } from 'CreatePostPagesQuery';
import ListCard from 'components/ListCard';
import * as React from 'react';
import { useMemo } from 'react';

import './logContent.scss';

interface LogContentProps {
  posts: PostsEdgeType[];
  selectedTag: string;
}

function LogContent(props: LogContentProps) {
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
          <ListCard key={id} id={id} link={slug} {...frontmatter} />
        ),
      )}
    </section>
  );
}

export default LogContent;
