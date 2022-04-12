import Seo from 'components/Seo';
import Home from 'containers/Home';
import * as React from 'react';
import 'styles/index.scss';

function IndexPage() {
  return (
    <>
      <Seo title="Home" />
      <Home />
    </>
  );
}

export default IndexPage;
