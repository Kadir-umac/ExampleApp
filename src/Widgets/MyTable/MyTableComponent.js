import * as React from "react";
import * as Scrivito from "scrivito";

import "./MyTable.scss";

Scrivito.provideComponent("MyTable", ({ widget }) => {
  let title = widget.get('headline')
  let rows = [...Array(widget.get('row') || 2).keys()]

  let col = [...Array(widget.get('column') || 2).keys()]
  const Row = () => {
    return (
      <>
        {col.map(() => {
          return <td>a</td>
        })}
      </>
    )
  }

  return (
    <table>
      <tbody>
        {rows.map(() => {
          return <tr>
            <Row />
          </tr>
        })}
      </tbody>

    </table>

  )
});

