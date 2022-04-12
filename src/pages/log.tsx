import Seo from 'components/Seo';
import Log from 'containers/Log';
import * as React from 'react';
import 'styles/page.scss';

function LogPage() {
  return (
    <>
      <Seo title="Log" />
      <Log />
    </>
  );
}

export default LogPage;
