import * as React from 'react';

import './listRow.scss';

function ListRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="list-row">
      <div className="title">{title}</div>
      <ul>{children}</ul>
    </div>
  );
}

// eslint-disable-next-line react/display-name
ListRow.Li = function ({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
};

export default ListRow;
