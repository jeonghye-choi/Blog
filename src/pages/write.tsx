import Seo from 'components/Seo';
import Write from 'containers/Write';
import * as React from 'react';
import 'styles/page.scss';

function WritePage() {
  return (
    <>
      <Seo title="Write" />
      <Write />
    </>
  );
}

export default WritePage;
