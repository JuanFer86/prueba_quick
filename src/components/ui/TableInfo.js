import React from "react";
import { Table } from "react-bootstrap";

export const TableInfo = ({ cells }) => {
  return (
    <Table bordered hover striped>
      <tbody>
        {cells.map(( { title, name }, i) => (
          <tr key={ `cells-${ name }-${i}` }>
            <td>{title}</td>
            <td>{name}</td>
          </tr>        
        ))}
      </tbody>
    </Table>
  );
};
