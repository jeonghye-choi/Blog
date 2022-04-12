import ListCard from 'components/ListCard';
import * as React from 'react';

import './logContent.scss';

function LogContent() {
  return (
    <section className="content">
      <ListCard />
      <ListCard />
    </section>
  );
}

export default LogContent;
