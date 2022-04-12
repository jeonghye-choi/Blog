import PhotoCard from 'components/PhotoCard';
import * as React from 'react';

import './writeContent.scss';

function WriteContent() {
  return (
    <section className="content">
      <PhotoCard />
      <PhotoCard />
    </section>
  );
}

export default WriteContent;
