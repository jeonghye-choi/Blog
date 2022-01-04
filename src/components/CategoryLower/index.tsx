import React from 'react';

import './categoryLower.scss';

function CategoryLower({ categoryList }: { categoryList: string[] }) {
  return (
    <section className="category-lower-wrap">
      <div className="category-lower all">전체</div>
      {categoryList.map(category => {
        return <div className="category-lower">{category}</div>;
      })}
    </section>
  );
}

export default CategoryLower;
