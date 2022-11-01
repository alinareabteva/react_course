import React, {Fragment} from 'react';
import './styles.css';

//return array of elements
const Columns = () => ([
  <td key="1">Hello</td>,
  <td key="2">world</td>
]);

//Fragment
const Columns2 = () => (
  <Fragment>
  <td style={{color: "red", textTransform: "uppercase"}}>Inline</td>
  <td className="title">Simple class</td>
  </Fragment>
);

export const TableApp = () => (
  <table>
   <tbody>
    <tr>
      <Columns />
    </tr>
    <tr>
     <Columns2 />
    </tr>
   </tbody>
  </table>
);

export default TableApp;
