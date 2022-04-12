import * as React from 'react';

import './category.scss';

function Category() {
  return (
    <section className="category">
      <li className="clicked">Frontend</li>
      <li>Backend</li>
      <li>CS</li>
      <li>Git/Github</li>
      <li>Activity</li>
      <li>Project</li>
    </section>
  );
}

export default Category;
