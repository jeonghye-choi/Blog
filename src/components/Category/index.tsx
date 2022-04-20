import { Link } from 'gatsby';
import * as React from 'react';

import './category.scss';

interface CategoryProps {
  selectedCategory: string;
  categories: string[];
}

function Category({ selectedCategory, categories }: CategoryProps) {
  return (
    <section className="category">
      <Link to={``} className={selectedCategory === 'All' ? 'selected' : ''}>
        All
      </Link>
      {categories.map((category, index) => (
        <Link
          to={`?category=${category}`}
          className={selectedCategory === category ? 'selected' : ''}
          key={index}>
          {category}
        </Link>
      ))}
    </section>
  );
}

export default Category;
