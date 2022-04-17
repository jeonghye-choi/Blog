import Tag from 'components/Tag';
import * as React from 'react';
import 'styles/page.scss';

import WriteContent from './WriteContent';

function Write() {
  return (
    <>
      <Tag selectedCategory="" selectedTag="" tags={[]} />
      <WriteContent />
    </>
  );
}

export default Write;
