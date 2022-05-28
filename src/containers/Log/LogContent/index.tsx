import { PostsEdgeType } from 'CreatePostPagesQuery';
import ListCard from 'components/ListCard';
import * as React from 'react';
import { useMemo } from 'react';

import './logContent.scss';

interface LogContentProps {
  page: string;
  posts: PostsEdgeType[];
  selectedTag: string;
}

function LogContent(props: LogContentProps) {
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
            : true && page === slug?.split('/')[0],
      ),
    [selectedTag],
  );

  return (
    <section className="log-content">
      {filteredPosts.map(
        ({ node: { id, frontmatter, body } }: PostsEdgeType) => (
          <ListCard key={id} id={id} body={body} {...frontmatter} />
        ),
      )}
    </section>
  );
}

export default LogContent;
