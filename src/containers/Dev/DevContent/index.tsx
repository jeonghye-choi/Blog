import { PostsEdgeType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';
import { useMemo } from 'react';

import './devContent.scss';

interface DevContentProps {
  page: string;
  posts: PostsEdgeType[];
  selectedCategory: string;
  selectedTag: string;
}

function DevContent(props: DevContentProps) {
  const { page, posts, selectedCategory, selectedTag } = props;

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories, tags },
            slug,
          },
        }: PostsEdgeType) =>
          (selectedCategory !== 'All'
            ? categories?.includes(selectedCategory)
            : true) &&
          (selectedTag !== 'All' ? tags?.includes(selectedTag) : true) &&
          page === slug.split('/')[0],
      ),
    [selectedCategory, selectedTag],
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

export default DevContent;
