import Seo from 'components/Seo';
import Home from 'containers/Home';
import * as React from 'react';

function IndexPage() {
  return (
    <>
      <Seo title="Home" />
      <Home />
    </>
  );
}

export default IndexPage;
