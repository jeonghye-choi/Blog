import * as React from 'react';

import './listTable.scss';

interface ListTableElement {
  left: string;
  center: string;
  right: string;
}

interface ListTableProps {
  data: ListTableElement[];
}

function ListTable(props: ListTableProps) {
  const data = props.data;

  return (
    <ul className="listtable">
      {data.map((element, index) => (
        <li key={index}>
          <span className="left">{element.left}</span>
          <span className="center">{element.center}</span>
          <span className="right">{element.right}</span>
        </li>
      ))}
    </ul>
  );
}

export default ListTable;
