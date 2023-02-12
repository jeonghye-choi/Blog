import * as React from 'react';

import './listTable.scss';

function ListTable({ children }: { children: React.ReactNode }) {
  return <ul className="list-table">{children}</ul>;
}

// eslint-disable-next-line react/display-name
ListTable.Li = function ({
  column = 3,
  children,
}: {
  column?: number;
  children: React.ReactNode;
}) {
  return <li className={`li-${column}`}>{children}</li>;
};

export default ListTable;
