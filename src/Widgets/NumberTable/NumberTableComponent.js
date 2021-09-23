import * as React from "react";
import * as Scrivito from "scrivito";

import "./NumberTable.scss";

Scrivito.provideComponent("NumberTable", ({ widget }) => (
  <Scrivito.ContentTag
    className="number-table"
    content={widget}
    attribute="headline"
  />
));
