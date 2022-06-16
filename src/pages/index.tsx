import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Home from 'containers/Home';
import * as React from 'react';

function IndexPage() {
  return (
    <Layout page="Index">
      <Seo title="Home" />
      <Home />
    </Layout>
  );
}

export default IndexPage;
