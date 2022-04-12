import Category from 'components/Category';
import Layout from 'components/Layout';
import Tag from 'components/Tag';
import * as React from 'react';
import 'styles/page.scss';

import DevContent from './DevContent';

function Dev() {
  return (
    <Layout page="Dev">
      <Category />
      <Tag />
      <DevContent />
    </Layout>
  );
}

export default Dev;
