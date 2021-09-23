import * as Scrivito from "scrivito";

const MyTable = Scrivito.provideWidgetClass("MyTable", {
  attributes: {
    headline: "string",
    row: 'integer',
    column: 'integer',
    
  },
  extractTextAttributes: ["headline"],
});

export default MyTable;
