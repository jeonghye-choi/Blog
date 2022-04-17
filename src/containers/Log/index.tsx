import Layout from 'components/Layout';
import Tag from 'components/Tag';
import * as React from 'react';
import 'styles/page.scss';

import LogContent from './LogContent';

function Log() {
  return (
    <>
      <Tag selectedCategory="" selectedTag="" tags={[]} />
      <LogContent />
    </>
  );
}

export default Log;
