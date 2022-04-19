import { PostsEdgeType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';
import { useMemo } from 'react';

import './devContent.scss';

interface DevContentProps {
  posts: PostsEdgeType[];
  selectedCategory: string;
  selectedTag: string;
}

function DevContent(props: DevContentProps) {
  const { posts, selectedCategory, selectedTag } = props;

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories, tags },
          },
        }: PostsEdgeType) =>
          (selectedCategory !== 'All'
            ? categories?.includes(selectedCategory)
            : true) &&
          (selectedTag !== 'All' ? tags?.includes(selectedTag) : true),
      ),
    [selectedCategory, selectedTag],
  );

  return (
    <section className="content">
      {filteredPosts.map(({ node: { id, frontmatter } }: PostType) => (
        <PhotoCard key={id} {...frontmatter} />
      ))}
    </section>
  );
}

export default DevContent;
