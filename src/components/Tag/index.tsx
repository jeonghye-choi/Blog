import { Link } from 'gatsby';
import * as React from 'react';

import './tag.scss';

interface TagProps {
  selectedCategory?: string | undefined;
  selectedTag: string;
  tags: string[];
}

function Tag(props: TagProps) {
  const { selectedTag, tags } = props;
  const selectedCategory = props.selectedCategory && props.selectedCategory;

  return (
    <section className="tag">
      {selectedCategory ? (
        <Link
          to={`?category=${selectedCategory}`}
          className={selectedTag === 'All' ? 'selected' : ''}>
          All
        </Link>
      ) : (
        <Link to={``} className={selectedTag === 'All' ? 'selected' : ''}>
          All
        </Link>
      )}
      {tags.map((tag, index) => {
        if (selectedCategory) {
          return (
            <Link
              to={`?category=${selectedCategory}&tag=${tag}`}
              className={selectedTag === tag ? 'selected' : ''}
              key={index}>
              {tag}
            </Link>
          );
        } else {
          return (
            <Link
              to={`?tag=${tag}`}
              className={selectedTag === tag ? 'selected' : ''}
              key={index}>
              {tag}
            </Link>
          );
        }
      })}
    </section>
  );
}

export default Tag;
