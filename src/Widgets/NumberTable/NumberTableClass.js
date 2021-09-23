import * as Scrivito from "scrivito";

const NumberTable = Scrivito.provideWidgetClass("NumberTable", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default NumberTable;
