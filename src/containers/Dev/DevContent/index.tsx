import PhotoCard from 'components/PhotoCard';
import * as React from 'react';

import './devContent.scss';

function DevContent() {
  return (
    <section className="content">
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
    </section>
  );
}

export default DevContent;
