import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const NewsPage = Scrivito.provideObjClass("NewsPage", {
  attributes: {
    title: "string",
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default NewsPage;
