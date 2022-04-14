import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Write from 'containers/Write';
import * as React from 'react';
import 'styles/page.scss';

function WritePage() {
  return (
    <Layout page="Write">
      <Seo title="Write" />
      <Write />
    </Layout>
  );
}

export default WritePage;
