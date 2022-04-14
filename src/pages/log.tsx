import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Log from 'containers/Log';
import * as React from 'react';
import 'styles/page.scss';

function LogPage() {
  return (
    <Layout page="Log">
      <Seo title="Log" />
      <Log />
    </Layout>
  );
}

export default LogPage;
