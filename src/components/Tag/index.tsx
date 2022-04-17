import { Link } from 'gatsby';
import * as React from 'react';

import './tag.scss';

interface TagProps {
  selectedCategory: string;
  selectedTag: string;
  tags: string[];
}

function Tag(props: TagProps) {
  const { selectedCategory, selectedTag, tags } = props;

  return (
    <section className="tag">
      <Link to={`?category=${selectedCategory}`}>All</Link>
      {tags.map((tag, index) => (
        <Link
          to={`?category=${selectedCategory}&tag=${tag}`}
          className={selectedTag === tag ? 'selected' : ''}
          key={index}>
          {tag}
        </Link>
      ))}
    </section>
  );
}

export default Tag;
