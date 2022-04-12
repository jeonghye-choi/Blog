import Layout from 'components/Layout';
import Tag from 'components/Tag';
import * as React from 'react';
import 'styles/page.scss';

import WriteContent from './WriteContent';

function Write() {
  return (
    <Layout page="Write">
      <Tag />
      <WriteContent />
    </Layout>
  );
}

export default Write;
